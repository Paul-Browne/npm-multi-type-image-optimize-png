const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminOptipng = require('imagemin-optipng');
module.exports = (buffer, opts) => {
    opts = opts || {};
    opts.pngquant = opts.pngquant || [0.5, 0.8];
    opts.optipng = opts.optipng || 3;
    const pngquant = imagemin.buffer(buffer, {
        plugins: [
            imageminPngquant({
                quality: opts.pngquant,
                strip: true
            })
        ]
    })
    const optipng = imagemin.buffer(buffer, {
        plugins: [
            imageminOptipng({
                optimizationLevel: opts.optipng
            })
        ]
    })
    return Promise.all([buffer, pngquant, optipng]).then(res => {
        return res.sort((a, b) => a.length - b.length)[0]
    });
}