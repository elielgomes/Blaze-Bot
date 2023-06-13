'use client'
import {
	createContext,
	useEffect,
	useState
} from "react";
import { useRouter } from "next/navigation";
import {
	parseCookies,
	setCookie,
	destroyCookie,
} from "nookies";
import api from "@/api";
import { axiosApi } from "@/services/api";
import { ISignInData, IUser } from "@/interfaces";

export interface IAuthProvider {
	children: React.ReactNode;
}

export interface IAuthContext {
	user: IUser | null;
	isAuthenticated: boolean;
	signIn: ({ username, password }: ISignInData) => Promise<void>;
	signOut: () => void;
}

export const AuthContext = createContext({} as IAuthContext);
export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {

	const router = useRouter();
	const [user, setUser] = useState<IUser | null>(null);
	const isAuthenticated = !!user;

	useEffect(() => {
		recoverUserInfo().then((user) => {
			if (user) {
				setUser(user);
				router.push("/dashboard");
			} else {
				router.push("/");
			}
		}).catch(() => {
			router.push("/");
		})
	}, [router]);

	const signIn = async ({ username, password }: ISignInData) => {
		try {
			const response = await api.authenticateUser({ username, password });
			setCookie(undefined, "blazebot.token", response.token, {
				maxAge: 60 * 60 * 1, // Validade: 1 hora
				// httpOnly: true,
			});
			const user = {
				username: response.username,
				permition: response.permition,
			}
			setUser(user);
			axiosApi.defaults.headers['Authorization'] = `Bearer ${response.token}`;
			router.push("/dashboard");
		} catch (error) {
			console.log(error);
		}
	}

	const signOut = () => {
		destroyCookie(undefined, 'blazebot.token');
		router.push("/");
		window.location.reload();
	}

	const recoverUserInfo = async () => {
		const { "blazebot.token": token } = parseCookies();
		if (token) {
			try {
				const response = await api.getUserByToken(token);
				const recoveryUser = {
					username: response.username,
					permition: response.permition,
				}
				return recoveryUser;
			} catch (error) {
				console.log(error);
			}
		}
		throw new Error("Acess danied");
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	)
};