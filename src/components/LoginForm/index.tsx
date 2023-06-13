'use client'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import strings from "@/resources/strings";

interface IProps {
	signIn: (data: { username: string, password: string }) => void;
}

type TLoginUserFormData = z.infer<typeof loginUserFormSchema>;

const componentsString = strings.components.loginForm;
const loginUserFormSchema = z.object({
	username: z.string().nonempty(componentsString.warnings.usernameIsRequired),
	password: z.string().nonempty(componentsString.warnings.passwordIsRequired),
});

export const LoginForm: React.FC<IProps> = ({ signIn }) => {

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<TLoginUserFormData>({
		resolver: zodResolver(loginUserFormSchema),
	});

	return (
		<>
			<div className="bg-gray-dark w-[380px] h-[500px] rounded-md px-12">
				<div className="flex justify-center py-8">
					<Image
						alt="Brand"
						src="/img/icons/blaze-icon.svg"
						height="104"
						width="104"
						className="w-[104px] aspect-square"
						priority
					/>
				</div>

				<form
					onSubmit={handleSubmit(signIn)}
					className="flex flex-col gap-8 justify-center align-middle"
				>
					<div className="relative">
						<input
							type="text"
							className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-blue-dark border-0 appearance-none focus:outline-none focus:ring-0  peer"
							placeholder=" "
							{...register("username")}
						/>
						<label
							htmlFor="username"
							className="pointer-events-none absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
						>
							{componentsString.inputs.username}
						</label>

						{
							errors.username &&
							<span className="px-3 mt-1 text-blaze-blaze-red text-xs absolute">
								{errors.username.message}
							</span>
						}

					</div>

					<div className="relative">
						<input
							type="password"
							className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-blue-dark border-0 appearance-none focus:outline-none focus:ring-0  peer"
							placeholder=" "
							autoComplete="off"
							{...register("password")}
						/>
						<label
							htmlFor="password"
							className="pointer-events-none absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
						>
							{componentsString.inputs.password}
						</label>

						{
							errors.password &&
							<span className="px-3 mt-1 text-blaze-red text-xs absolute">
								{errors.password.message}
							</span>
						}
					</div>
					
					<div className="w-full">
						<div className="mb-2">
							<a
								href="/"
								className="text-gray-400 text-xs hover:text-white transition"
							>
								{componentsString.forgotPassword}
							</a>
						</div>
						<button
							type="submit"
							className="font-semibold flex justify-center py-4 w-full text-white bg-blaze-red hover:bg-blaze-red transition duration-200 active:scale-95 focus:outline-none focus:ring-blaze-red rounded-md text-sm px-5 items-center hover:brightness-90"
						>
							{componentsString.buttons.login}
							<svg
								aria-hidden="true"
								className="w-5 h-5 ml-2 -mr-1"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</form>

				<div className="mt-6 text-center">
					<span className="text-gray-400 text-xs font-semibold">
						{componentsString.dontHaveAccount}
						<a href="/" className="text-blaze-red">
							{componentsString.createNow}
						</a>
					</span>
				</div>
			</div>
		</>
	);
};
