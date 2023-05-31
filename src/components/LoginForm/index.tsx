import React from "react";
import strings from "@/resources/strings";
import Image from "next/image";

const componentsString = strings.components.loginForm;

export const LoginForm: React.FC = () => {
	return (
		<>
			<div className="bg-gray-dark w-[400px] h-[500px] rounded-md px-12">
				<div className="flex justify-center py-8">
					<Image
						alt="Brand"
						src="/img/icons/blaze-icon.svg"
						height="104"
						width="104"
						className="w-[104px] aspect-square"
					/>
				</div>

				<form className="flex flex-col gap-6 justify-center align-middle">
					<div className="relative">
						<input
							type="text"
							id="floating_filled"
							className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-blue-dark border-0 appearance-none focus:outline-none focus:ring-0  peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_filled"
							className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
						>
							{componentsString.inputs.username}
						</label>
					</div>

					<div className="relative">
						<input
							type="text"
							id="floating_filled"
							className="block rounded-md px-2.5 pb-2.5 pt-5 w-full text-sm text-white bg-blue-dark border-0 appearance-none focus:outline-none focus:ring-0  peer"
							placeholder=" "
						/>
						<label
							htmlFor="floating_filled"
							className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
						>
							{componentsString.inputs.password}
						</label>
					</div>

					<div>
						<a
							href="/"
							className="text-gray-400 text-xs hover:text-white transition"
						>
							{componentsString.forgotPassword}
						</a>
					</div>

					<div className="w-full">
						<button
							type="button"
							className="font-semibold flex justify-center py-4 w-full text-white bg-red hover:bg-red transition duration-200 active:scale-95 focus:outline-none focus:ring-red rounded-md text-sm px-5 items-center hover:brightness-90"
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
									fill-rule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
				</form>

				<div className="mt-10 text-center">
					<span className="text-gray-400 text-xs font-semibold">
						{componentsString.dontHaveAccount}
						<a href="/" className="text-red">
							{componentsString.createNow}
						</a>
					</span>
				</div>
			</div>
		</>
	);
};
