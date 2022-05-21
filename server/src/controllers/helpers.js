export const getStockStatus = (stock) => stock === 0 ? 0 : 1
export const calcPoints = (productPoints, userPoints) => productPoints <= userPoints ? 2 : 3