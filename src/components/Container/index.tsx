import React, { ReactNode } from "react";

interface IProps {
	children: ReactNode
}

export const Container: React.FC<IProps> = ({ children }) => (
	<div className="max-w-[1440px] mx-auto px-8 py-12">
		{children}
	</div>
)