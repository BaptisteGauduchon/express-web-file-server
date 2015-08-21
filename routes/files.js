var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var filesLocation = "../public/files";

/* GET available files. */
router.get('/', function(req, res, next) {
	fs.readdir(path.join(__dirname, filesLocation), function(err, files) {
		if (err) {
			throw err;
		}
		res.render('files', {
			title: 'Available files',
			files: files
		});
	});
});

module.exports = router;