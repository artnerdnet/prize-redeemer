import Prisma from '@prisma/client';

import { mocks as userMocks } from './__mocks__/users.js';
import { mocks as productMocks } from './__mocks__/products.js';
import { mocks as orderMocks } from './__mocks__/orders.js';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient();

async function main() {
	await prisma.$transaction(
		userMocks.map(cur =>
			prisma.user.upsert(cur)
		)
	);
	await prisma.$transaction(
		productMocks.map(cur =>
			prisma.product.upsert(cur)
		)
	);
	await prisma.$transaction(
		orderMocks.map(cur =>
			prisma.order.upsert(cur)
		)
	);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});