import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminOptipng from 'imagemin-optipng';
export default async (buffer, opts = {
        pngquant: [0.5, 0.8],
        optipng: 3
    }) => {
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
    const res = await Promise.all([buffer, pngquant, optipng]);
    return res.sort((a, b) => a.length - b.length)[0];
}