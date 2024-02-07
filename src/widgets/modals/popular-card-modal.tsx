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
import { CardWithForm } from "@/src/entity/card";
import { PopularLists } from "@/src/widgets/popular-lists";
import { useState } from "react";

export const PopularCardModal = () => {
	const [step, setStep] = useState<"pack" | "link">("pack");
	const { isOpen, type, onClose } = useModal();

	const isModalOpen = isOpen && type === "popularCard";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent className={"min-w-lg"}>
				<DialogHeader className={"px-6"}>
					<DialogTitle>
						{step === "pack" ? "Выберите колоду" : "Поделитесь ссылкой"}
					</DialogTitle>
				</DialogHeader>
				{step === "pack" ? <PopularLists /> : <PopularLists />}
			</DialogContent>
		</Dialog>
	);
};
