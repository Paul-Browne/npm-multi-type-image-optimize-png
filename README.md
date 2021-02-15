# imagemin-most-optimized-png
Returns the best optimized image from pngquant, optipng or the original if optimization didn't improve it.

### usage

`npm i imagemin-most-optimized-png`

or 

`npm i -D imagemin-most-optimized-png`


```js
const fs = require("fs");
const optimPNG = require("imagemin-most-optimized-png");

fs.readFile("/path/to/source/image.png", (err, data) => {
	if (err) throw err;
	optimPNG(data).then(image => {
		// assumes "/path/to/dist/" directory exists
		fs.writeFile("/path/to/dist/image.png", image, err => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})
});
```

Pass plugin quality levels as options for pngquant and optipng.

```js
const fs = require("fs");
const optimPNG = require("imagemin-most-optimized-png");

const options = {			// defauls shown
	pngquant: [0.5, 0.8]	// Array<0...1, 0...1> Instructs pngquant to use the least amount of colors required to meet or exceed the max quality.
	optipng: 3				// 0-7, 0 - minimal optimization, 7 - 240 trials 
}

fs.readFile("/path/to/source/image.png", (err, data) => {
	if (err) throw err;
	optimPNG(data, options).then(image => {
		// assumes "/path/to/dist/" directory exists
		fs.writeFile("/path/to/dist/image.png", image, err => {
			if (err) throw err;
			console.log('The file has been saved!');
		});
	})
});
```





