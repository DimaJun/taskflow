import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './styles/globals.scss';
import { ReactNode } from 'react';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'TaskFlow',
	description: 'App to manage your routine tasks',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${montserrat.variable}`}>{children}</body>
		</html>
	);
}
