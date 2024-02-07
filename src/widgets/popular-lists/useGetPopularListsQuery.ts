import { useQuery } from "@tanstack/react-query";
import { getPopularLists } from "./query";

export const useGetPopularListsQuery = () => {
	return useQuery({
		queryFn: () => getPopularLists(),
		queryKey: ["getPopularLists"],
	});
};
