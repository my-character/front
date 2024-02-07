"use client";

import { useModal } from "@/src/shared/hooks/use-modal";
import { Button } from "@/src/shared/ui/button";
import { Account } from "@/src/widgets/account";
import { Navigation } from "@/src/widgets/navigation";

export default function Home() {
	const { onOpen } = useModal();

	return (
		<div className={"flex justify-between"}>
			<div className={"flex flex-col gap-10 "}>
				<Account />
				<Button
					onClick={() => {
						onOpen("popularCard");
					}}
				>
					Играть
				</Button>
			</div>

			<Navigation />
		</div>
	);
}
