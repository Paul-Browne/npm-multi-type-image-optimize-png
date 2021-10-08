# imagemin-most-optimized-png
Returns the best optimized image from pngquant, optipng or the original if optimization didn't improve it.

### usage

`npm i imagemin-most-optimized-png`

or 

`npm i -D imagemin-most-optimized-png`


```js
import { promises as fs } from 'fs';
import optimizePNG from "imagemin-most-optimized-png";

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizePNG(data);
	await fs.writeFile("/path/to/dist/image.png", optimized);
} 

optimze("/path/to/source/image.png");
```

Pass plugin quality levels as options for pngquant and optipng.

```js
import { promises as fs } from 'fs';
import optimizePNG from "imagemin-most-optimized-png";

const options = { 
	// defaults shown
	
	// Array<0...1, 0...1> Instructs pngquant to use the least amount of colors required to meet or exceed the max quality.
	pngquant: [0.5, 0.8], 
	
	// 0-7, 0 - minimal optimization, 7 - 240 trials 
	optipng: 3 
}

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizePNG(data, options);
	await fs.writeFile("/path/to/dist/image.png", optimized);
} 

optimze("/path/to/source/image.png");
```





