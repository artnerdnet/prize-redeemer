export const createResponse = (res, data, message) => {
	res.status(201).json({
		message,
		success: true,
		code: 201,
		data
	});
};

export const updateResponse = (res, data, message) => {
	res.send({
		message,
		success: true,
		code: 200,
		data
	});
};

export const getResponse = (res, data, message) => {
	res.send({
		message,
		success: true,
		code: 200,
		data
	});
};

export const okResponse = (res, message = null) => {
	res.send({
		success: true,
		code: 200,
		message
	});
};