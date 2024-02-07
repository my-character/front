import { CardWithForm } from "@/src/entity/card";
import { useGetPopularListsQuery } from "@/src/widgets/popular-lists/useGetPopularListsQuery";

export const PopularLists = () => {
	const { data, isLoading } = useGetPopularListsQuery();

	console.log(data);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div className={"flex gap-4"}>
			{data?.map((el) => (
				<CardWithForm {...el} key={el.id} className={"w-[200px]"} />
			))}
		</div>
	);
};
