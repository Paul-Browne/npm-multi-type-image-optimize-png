const fs = require("fs");
const optimizePNG = require("./index.js");

const optimze = pathToPNG => {
	fs.readFile(pathToPNG, (err, data) => {
		if (err) throw err;
		optimizePNG(data).then(res => {
			fs.writeFile(pathToPNG.replace("src", "dist"), res, err => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		})
	});
} 

optimze("./tests/src/images/paint.png");
optimze("./tests/src/images/gradient.png");
optimze("./tests/src/images/screenshot.png");

