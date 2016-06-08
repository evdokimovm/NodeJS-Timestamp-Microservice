var express = require('express');
var moment = require('moment');
var url = require('url');
var cors = require('cors');
var port = process.env.PORT || 8080;

var app = express();
app.use(cors());

app.route('/').get(function (req, res) {
	res.sendFile(process.cwd() + '/index.html')
});

app.get('/:date', function(req, res) {

	var URL = url.parse(req.url).pathname.replace(/%20/g, ' ').slice(1);

	if (isNaN(URL)) {
		var unixtime = moment(URL.toString(), "MMMM-DD-YYYY").unix()
		var naturaltime = moment(URL.toString(), "MMMM-DD-YYYY").format("MMMM D, YYYY")
	} else {
		var unixtime = moment.unix(+URL, "MMMM-DD-YYYY").unix()
		var naturaltime = moment.unix(+URL).format("MMMM D, YYYY")
	}

	res.send(JSON.stringify({
		unix : unixtime,
		natural : naturaltime
	}))

});

app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
});
