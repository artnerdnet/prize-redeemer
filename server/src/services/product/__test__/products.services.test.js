import { mocks as productMocks } from '../../../../mocks/products.js';
import { prisma } from '../../../../testUtils/setupDb.js';
import { createProduct } from '../products.services.js';

describe('products services', () => {
  // console.log(prisma)
  // beforeEach(async () => {

  // });

  it('adds a product to the database', async () => {
    await prisma.product.findFirst();

    console.log(prisma.product.findFirst())

    // console.log(prismaMock.products.create.mockResolvedValue('hi'), 'mock')
    // prismaMock.products.create.mockResolvedValue(newProduct)
    // await expect(prismaMock.products.create.mockResolvedValue(newProduct)).toHaveBeenCalledTimes(1)
    // expect(await createProduct(productMocks[0])).toBe('developer');

    // expect(prisma.performance.update).toHaveBeenCalledTimes(1);

    // resolves.toEqual(newProduct)
  });
});