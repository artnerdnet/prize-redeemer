import { prisma } from '../../config/db.js';

export const transactionHandler = (table) => {
  const findAll = async () => await prisma[table].findMany();
  const findById = async (id) => await prisma[table].findUnique({ where: { id } });
  const findByKey = async (key) => await prisma[table].findUnique({ where: key });
  const findAllByKey = async (key) => await prisma[table].findMany({ where: key });
  const create = async (params) => await prisma[table].insert(params);
  const update = async (params) => await prisma[table].update({
    where: { id: params.id },
    data: { ...params }
  })
  const destroy = async (id) => await prisma[table].delete({ where: { id } })

  return {
    findAll,
    findById,
    findByKey,
    findAllByKey,
    create,
    update,
    destroy
  }
}