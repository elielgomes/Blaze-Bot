'use client'
import React from "react";
import Image from "next/image";

interface IProps {
	color: number;
	number?: number;
}

// black = 2
// red = 1
// white = 0

export const RouletteBox: React.FC<IProps> = ({ color, number }) => {
	return (
		<div className={`rounded-[4px] w-24 h-24 ${color == 0 ? "bg-white" : color == 1 ? "bg-blaze-red" : "bg-blaze-black"} flex flex-shrink-0 items-center justify-center`}>
			{
				color === 0
					? <div className="flex items-center justify-center text-white text-lg font-extrabold w-[52px] h-[52px] border-4 border-white rounded-full">
						<Image alt="Blaze Icon" src="img/icons/blaze-icon.svg" width={40} height={53} priority />
					</div>
					: <div className="flex items-center justify-center text-white text-lg font-extrabold w-[52px] h-[52px] border-4 border-white rounded-full">{number}</div>
			}
		</div>
	)
}