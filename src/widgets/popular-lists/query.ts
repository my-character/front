import { ShortPack } from "@/src/shared/mock/short-pack";
import { IResShortPack } from "@/src/widgets/popular-lists/type";

export const getPopularLists = async (): Promise<IResShortPack[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(ShortPack);
		}, 2000);
	});
};
