export const logErrorMiddleware = (err, req, res, next) => {
	logError(err);
	next(err);
};

export const logError = (err) => {
	console.error('Error:', err);
};

export const returnError = (err, res) => {
	res.status(err.statusCode || 500).send(err.message);
};
