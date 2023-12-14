import { Avatar, AvatarImage } from "@/src/shared/ui/avatar";
import Typography from "@/src/shared/ui/typography";

export const Account = () => {
	return (
		<div className={"flex flex-col gap-2"}>
			<Avatar className={"drop-shadow-sm"}>
				<AvatarImage src="/avatar.png" />
			</Avatar>
			<Typography variant={"p"} className={"text-center font-bold"}>
				Anonym
			</Typography>
		</div>
	);
};
