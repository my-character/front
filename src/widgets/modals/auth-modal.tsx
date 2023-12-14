"use client";

import { useModal } from "@/src/shared/hooks/use-modal";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogHeader,
} from "@/src/shared/ui/dialog";
import Typography from "@/src/shared/ui/typography";
import { AuthForm } from "@/src/feature/auth-form";

export const AuthModal = () => {
	const { isOpen, type, onClose } = useModal();

	const isModalOpen = isOpen && type === "authModal";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className={" text-white p-6 overflow-hidden"}>
				<DialogHeader className={"px-6"}>
					<DialogTitle>
						<Typography variant={"h2"}>Вход</Typography>
					</DialogTitle>
				</DialogHeader>
				<AuthForm />
			</DialogContent>
		</Dialog>
	);
};
