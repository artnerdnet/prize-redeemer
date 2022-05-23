import pkg from '@prisma/client'

const { PrismaClient } = pkg;

let prisma

if (process.env.NODE_ENV === 'production') {
  const { PrismaClient: PrismaClientProd } = pkg
  prisma = new PrismaClientProd()
} else {
  prisma = new PrismaClient()
}

export default prisma
