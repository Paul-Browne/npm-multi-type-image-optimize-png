import { promises as fs } from 'fs';
import optimizePNG from "./index.js";

const optimze = async path => {
	const data = await fs.readFile(path);
	const optimized = await optimizePNG(data);
	await fs.writeFile(path.replace("src", "dist"), optimized);
} 

optimze("./tests/src/images/paint.png");
optimze("./tests/src/images/gradient.png");
optimze("./tests/src/images/screenshot.png");
optimze("./tests/src/images/field.png");
optimze("./tests/src/images/field-large.png");
optimze("./tests/src/images/laptop.png");
optimze("./tests/src/images/beach.png");
optimze("./tests/src/images/cartoon.png");