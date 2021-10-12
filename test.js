import { readFile, writeFile } from 'fs/promises';
import optimizePNG from "./index.js";

const optimzeLowQualityOptions = async path => {
	const data = await readFile(path);
	const optimized = await optimizePNG(data, {
		pngquant: [0,0],
		optipng: 0
	});
	await writeFile(path.replace("src", "dist"), optimized);
} 

const optimzeNoOptions = async path => {
	const data = await readFile(path);
	const optimized = await optimizePNG(data);
	await writeFile(path.replace("src", "dist"), optimized);
} 

optimzeLowQualityOptions("./tests/src/images/paint.png");
optimzeNoOptions("./tests/src/images/gradient.png");
optimzeLowQualityOptions("./tests/src/images/screenshot.png");
optimzeNoOptions("./tests/src/images/field.png");
optimzeLowQualityOptions("./tests/src/images/field-large.png");
optimzeNoOptions("./tests/src/images/laptop.png");
optimzeLowQualityOptions("./tests/src/images/beach.png");
optimzeNoOptions("./tests/src/images/cartoon.png");