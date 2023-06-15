'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

import { Container, HistoryOfRounds, RouletteBox } from "@/components";
import { ICurrentRound, IOccurrencesHistoryColors, IRecentHistory, TRoulletColors, TRoulletColorsTernary } from "@/interfaces";


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { countTernaryOccurrences } from "@/utils/countTernaryOccurrences";



const getRecentHistory = async (): Promise<Array<IRecentHistory>> => {
	const response = await fetch(`http://localhost:3001/api/history/recent`);
	const data = await response.json();
	return data;
}


const getCurrentRound = async (): Promise<ICurrentRound> => {
	const response = await fetch(`http://localhost:3001/api/history/current`);
	const data = await response.json();
	return data;
}

const Dashboard = () => {

	ChartJS.register(ArcElement, Tooltip, Legend);

	const { user, isAuthenticated, signOut } = useContext(AuthContext);
	const [recentHistory, setRecentHistory] = useState<Array<IRecentHistory> | null>(null);
	const [recentHistoryTernary, setRecentHistoryTernary] = useState<TRoulletColorsTernary | null>(null);
	const [recentHistoryColors, setRecentHistoryColors] = useState<TRoulletColors | null>(null);
	const [occurrencesHistoryColors, setOccurrencesHistoryColors] = useState<IOccurrencesHistoryColors | null>(null);
	const [currentRound, setCurrentRound] = useState<ICurrentRound | null>(null);

	useEffect(() => {
		getRecentHistory().then((data) => {
			setRecentHistory(data);
			const occurrencesColors = countTernaryOccurrences(data.map((data) => data.color));
			setOccurrencesHistoryColors(occurrencesColors);
		}).catch(console.log);

		getCurrentRound().then((data) => {
			setCurrentRound(data);
		}).catch(console.log);
	}, []);

	return (
		<Container>
			<div className="grid grid-cols-1 lg:grid-cols-8 gap-5">

				{/* <div className="col-span-1 lg:col-span-2 bg-gray-dark rounded-md h-72 p-5">
					<h2 className="text-white text-lg">Previsão</h2>
					<p className="text-sm text-gray-400">próximo resultado</p>
				</div> */}

				<div className="col-span-1 lg:col-span-2 bg-gray-dark rounded-md h-72 p-5">
					<div className="w-full">
						<h2 className="text-white text-lg">Rodada Atual</h2>
						<p className="text-sm text-gray-400">Ultimo resultado</p>
					</div>
					{currentRound &&
						<RouletteBox color={currentRound.color!} number={currentRound.roll!}
						/>}
				</div>

				<div className="col-span-1 lg:col-span-4 bg-gray-dark rounded-md h-72">

				</div>

				<div className="col-span-1 lg:col-span-2 bg-gray-dark rounded-md h-72 p-5 flex flex-col items-center justify-between">
					<div className="w-full">
						<h2 className="text-white text-lg">Proporção</h2>
						<p className="text-sm text-gray-400">Ultimas 300 rodadas</p>
					</div>
					<div className="flex w-full h-full items-center justify-center">
						<Pie data={{
							labels: ["Branco", "Vermelho", "Preto"],
							datasets: [{
								label: "Número de cores",
								data: occurrencesHistoryColors,
								backgroundColor: [
									"#FFFFFF",
									"#CC2843",
									"#262f3c"
								],
							}],
						}}
							options={{
								aspectRatio: 2 / 1,
								responsive: true,
								plugins: {
									legend: {
										position: "right",
									},
								}
							}}
						/>
					</div>
				</div>


				<HistoryOfRounds history={recentHistory} />

			</div>
		</Container>
	)
}

export default Dashboard;

{/* <p className="text-white">{user?.username}</p>
<p className="text-white">{isAuthenticated && "ola"}</p>
<button onClick={() => signOut()} type="button" className="p-4 bg-red rounded-md text-white">Logout</button> */}