"use client";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/src/shared/ui/form";
import { Input } from "@/src/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/src/shared/ui/button";

const formSchema = z.object({
	email: z.string().email().min(1, {
		message: "Email is required.",
	}),
	password: z.string().min(10, {
		message: "Password must be at least 10 characters.",
	}),
});
export const AuthForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const isLoading = form.formState.isSubmitting;

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="Введите ваше имя" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									placeholder="Введите пароль"
									{...field}
									type={"password"}
								/>
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className={"flex justify-between"}>
					<Button type="button" variant={"link"} className={"text-sm"}>
						Регистрация
					</Button>
					<Button type="submit">Войти</Button>
				</div>
			</form>
		</Form>
	);
};
