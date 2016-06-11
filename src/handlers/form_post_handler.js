const default_values = [
	{key: 'KEY', value: 'VALUE'}		
];

const createKeyValuePairArrayFromObject = function(obj) {
	return Object.keys(obj).map(function(key) {		
		return {key: key, value: obj[key]};
	});
};

const handler = function(req, res) {

	var request_values = default_values.concat(createKeyValuePairArrayFromObject(req.body));

	res.render('submitted', {
		pagename: 'SUBMITTED',
		values: request_values,
		missing_values: request_values.length === 1
	});
};

module.exports = handler;