import { readFile, writeFile } from "fs";
import optimizePNG from "./index.js";

const optimze = pathToPNG => {
	readFile(pathToPNG, (err, data) => {
		if (err) throw err;
		optimizePNG(data).then(res => {
			writeFile(pathToPNG.replace("src", "dist"), res, err => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		})
	});
} 

optimze("./tests/src/images/paint.png");
optimze("./tests/src/images/gradient.png");
optimze("./tests/src/images/screenshot.png");

