import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/src/app/globals.css";
import { cn } from "@/src/shared/lib/utils";
import { ModalProvider } from "@/src/widgets/providers/modal-providers.";
import { ThemeProvider } from "@/src/widgets/providers/theme-provider";
import Providers from "@/src/app/provider";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MyCharacter",
	description: "MyCharacter",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={cn(
					inter.className,
					"min-h-screen flex flex-col items-center justify-center dark:bg-dark-primary-bg ",
				)}
			>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						enableSystem={false}
						disableTransitionOnChange
					>
						{children}
						<ModalProvider />
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
