import { mockDeep, mockReset } from 'jest-mock-extended';

import prisma from '../config/db.js';

jest.mock('./client', () => ({
	__esModule: true,
	default: mockDeep(),
}));

beforeEach(() => {
	mockReset(prismaMock);
});

export const prismaMock = prisma;