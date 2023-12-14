"use client";

import { useEffect, useState } from "react";

import { PopularCardModal } from "@/src/widgets/modals/popular-card-modal";
import { AuthModal } from "@/src/widgets/modals/auth-modal";

export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<PopularCardModal />
			<AuthModal />
		</>
	);
};
