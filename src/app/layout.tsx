import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body>
				{/* <AuthProvider> */}
					{children}
				{/* </AuthProvider> */}
			</body>
		</html>
	)
}
