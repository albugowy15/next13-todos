// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

interface Category {
	id: string;
	name: string;
	description?: string;
	task?: Task;
	taskId?: string;
}

interface Task {
	id: string;
	title: string;
	description: string;
	categories: Category[];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const tasks = await prisma.task.findMany({
		include: {
			categories: true,
		},
	});
	res.status(200).json(tasks);
}
