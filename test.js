import { promises as fs } from 'fs';
import optimizePNG from "./index.js";

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizePNG(data);
	await fs.writeFile(path.replace("src", "dist"), optimized);
} 

console.log("start");
await optimze("./tests/src/images/paint.png");
await optimze("./tests/src/images/gradient.png");
await optimze("./tests/src/images/screenshot.png");
await optimze("./tests/src/images/field.png");
await optimze("./tests/src/images/field-large.png");
await optimze("./tests/src/images/laptop.png");
await optimze("./tests/src/images/beach.png");
await optimze("./tests/src/images/cartoon.png");
console.log("finish");