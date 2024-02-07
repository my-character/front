import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/src/shared/ui/card";
import { cn } from "@/src/shared/lib/utils";
import { IResShortPack } from "@/src/widgets/popular-lists/type";
import Image from "next/image";
import { Button } from "@/src/shared/ui/button";

interface Props extends IResShortPack {
	className?: string;
}
export function CardWithForm({ className, title, img }: Props) {
	return (
		<Card className={cn("w-[350px] flex flex-col justify-between", className)}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className={"mt-auto"}>
				<Image src={img} alt={title} width={300} height={400} />
			</CardContent>
			<CardFooter>
				<Button className={"mx-auto text-sm"} size={"sm"}>
					Выбрать
				</Button>
			</CardFooter>
		</Card>
	);
}
