import Prisma from '@prisma/client';

import { mocks as userMocks } from './mocks/users.js';
import { mocks as productMocks } from './mocks/products.js';

const { PrismaClient } = Prisma;
const prisma = new PrismaClient()

async function main() {
  await prisma.$transaction(
    userMocks.map(cur =>
      prisma.user.upsert(cur)
    )
  )
  await prisma.$transaction(
    productMocks.map(cur =>
      prisma.product.upsert(cur)
    )
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })