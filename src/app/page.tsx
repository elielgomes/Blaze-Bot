'use client';
import { NextPage } from "next";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { LoginForm } from "@/components";

const Login: NextPage = () => {

	const { signIn } = useContext(AuthContext);

	return (
		<main className="flex items-center justify-center w-full h-screen">
			<LoginForm signIn={signIn} />
		</main>
	)
}

export default Login;
