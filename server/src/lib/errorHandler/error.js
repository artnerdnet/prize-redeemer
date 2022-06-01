export const errorHandler = (res, msg = `Error ${res.status}`, err = null) => {
	const response = {
		msg,
		code: res.status,
		success: false,
		data: null
	};

	if (err) {
		if (err.name === 'Not found') {
			return res.status(404).send(response);
		}
		if (err.name === 'Validation fail') {
			return res.status(404).send({
				...response,
				code: 422,
				validationError: err
			});
		}
	}

	if (res.status === 404 || res.status === 500) {
		return res.status(404).send(response);
	}
};

