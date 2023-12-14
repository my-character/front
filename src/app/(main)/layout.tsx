import "@/src/app/globals.css";
import { ModeToggle } from "@/src/feature/theme-toggle";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main
			className={
				"relative container p-20 dark:bg-dark-secondary-bg rounded bg-light-secondary "
			}
		>
			{children}
			<ModeToggle />
		</main>
	);
}
