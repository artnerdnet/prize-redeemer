import db from '../../config/db.js';

export const transactionHandler = (table) => {
  const findAll = async () => await db.select().from(table);
  const findById = async (id) => await db.select().from(table).where({ id });
  const findByKey = async (key) => await db.select().from(table).where({ key })[0];
  const create = async (params) => await db.select().from(table).insert(params);
  const update = async (params) => await db.select().from(table).where('id', params.id).update(params);
  const destroy = async (id) => await db.select().from(table).where(id).del();

  return {
    findAll,
    findById,
    findByKey,
    create,
    update,
    destroy
  }
}