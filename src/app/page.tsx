"use client";

import Tasks from "@components/Tasks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Tasks />
		</QueryClientProvider>
	);
}
