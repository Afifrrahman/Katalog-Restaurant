// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'src/public/images/sharp');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

// eslint-disable-next-line arrow-parens
fs.readdirSync(target).forEach(image => {
  // Mengubah ukuran dan mengompresi gambar
  sharp(`${target}/${image}`)
    .resize(800)
    .jpeg({ quality: 50 }) // Menggunakan format JPEG dengan kualitas 50%
    .toFile(path.resolve(
      __dirname,
      // eslint-disable-next-line function-paren-newline
      `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`));

  sharp(`${target}/${image}`)
    .resize(480)
    .jpeg({ quality: 50 }) // Menggunakan format JPEG dengan kualitas 50%
    .toFile(path.resolve(
      __dirname,
      // eslint-disable-next-line function-paren-newline
      `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`));
});
