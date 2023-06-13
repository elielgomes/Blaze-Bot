'use client'
import React from 'react'
import { IRecentHistory } from '@/interfaces'
import { RouletteBox } from '../RouletteBox'

interface IProps {
	history: Array<IRecentHistory> | null;
}

export const HistoryOfRounds: React.FC<IProps> = ({ history }) => {

	return (
		<>
			<div className="col-span-1 lg:col-span-full bg-gray-dark rounded-md h-36 p-3">
				<div className="w-full h-full bg-blue-dark flex flex-row-reverse items-center overflow-hidden gap-2 pe-2">
					{
						!history ?
							Array(20).fill(null).map((item, index) => {
								return (
									<div key={index} className="animate-pulse bg-gray-dark rounded-[4px] w-24 h-24 flex flex-shrink-0" />
								)
							})
							:
							history.map((item) => (
								<RouletteBox key={item.id} color={item.color} number={item.roll} />
							))
					}
				</div>
			</div>
		</>
	)
}
