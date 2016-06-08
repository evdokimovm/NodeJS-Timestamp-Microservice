# Node.js Timestamp Microservice

Usage example:

```javascript
fetch('http://localhost:8080/1450137600')
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		console.log(err);
	});
```

or

```javascript
fetch('http://localhost:8080/December 15, 2015')
	.then((res) => {
		res.json().then((data) => {
			console.log(data);
		});
	})
	.catch((err) => {
		console.log(err);
	});
```

Output object:

```json
{
	"unix": 1450137600,
	"natural": "December 15, 2015"
}
```
