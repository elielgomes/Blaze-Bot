'use client'
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	return (
		<>
			<p className="text-white">{user?.username}</p>
		</>
	)
}

export default Dashboard;
