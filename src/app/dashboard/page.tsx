'use client'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

import { Container, HistoryOfRounds } from "@/components";
import { IRecentHistory } from "@/interfaces";

const apiBaseUrl = process.env.BASE_URL_API as string;

const getRecentHistory = async (): Promise<Array<IRecentHistory>> => {
	const response = await fetch(`http://localhost:3001/api/history/recent`);
	const data = await response.json();
	return data;
}

const Dashboard = () => {

	const { user, isAuthenticated, signOut } = useContext(AuthContext);
	const [recentHistory, setRecentHistory] = useState<Array<IRecentHistory> | null>(null);

	useEffect(() => {
		getRecentHistory().then((data) => {
			setRecentHistory(data);
		}).catch(console.log);
	}, []);

	return (
		<Container>
			<div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
				<div className="col-span-1 lg:col-span-2 bg-gray-dark rounded-md h-52 p-5">
					<h2 className="text-white text-lg">Previsão</h2>
					<p className="text-sm text-gray-400">próximo resultado</p>
				</div>
				<div className="col-span-1 lg:col-span-3 bg-gray-dark rounded-md h-52">

				</div>
				<div className="col-span-1 lg:col-span-3 bg-gray-dark rounded-md h-52">

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