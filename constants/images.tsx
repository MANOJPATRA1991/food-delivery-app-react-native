const normalizedPath = require("path").join(__dirname, "assets");

const images: { [prop: string]: any; } = { };

require("fs").readdirSync(normalizedPath).forEach((file: string) => {
  const fileName = file.split('.')[0];
  images[fileName] = require(`../assets/images/${file}`);
});

export default images;