"use client";

import { useQuery } from "@tanstack/react-query";

interface Task {
	id: string;
	title: string;
	description: string;
	categories: Category[];
}

interface Category {
	id: string;
	name: string;
	description?: string;
	task?: Task;
	taskId?: string;
}

const Tasks = () => {
	const fetchTasks = async (): Promise<Task[]> => {
		const response = await fetch("http://localhost:3000/api/tasks", { method: "GET" });
		const tasks: Task[] = await response.json();
		return tasks;
	};
	const { data } = useQuery({
		queryKey: ["tasks"],
		queryFn: fetchTasks,
		staleTime: 10000,
	});

	return (
		<>
			{data?.map((task) => (
				<div key={task.id}>
					<h1 className="font-bold">{task.title}</h1>
					<p>{task.description}</p>

					{task.categories && task.categories.map((category) => <p key={category.id}>{category.name}</p>)}
				</div>
			))}
		</>
	);
};

export default Tasks;
