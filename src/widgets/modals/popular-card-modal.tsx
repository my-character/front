"use client";

import { useModal } from "@/src/shared/hooks/use-modal";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogHeader,
} from "@/src/shared/ui/dialog";
import Typography from "@/src/shared/ui/typography";

export const PopularCardModal = () => {
	const { isOpen, type, onClose } = useModal();

	const isModalOpen = isOpen && type === "popularCard";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent
				className={"bg-purple-blue text-white p-6 overflow-hidden"}
			>
				<DialogHeader className={"px-6"}>
					<DialogTitle>
						<Typography variant={"h2"}>Создание комнаты</Typography>
					</DialogTitle>
				</DialogHeader>
				popularCard
			</DialogContent>
		</Dialog>
	);
};
