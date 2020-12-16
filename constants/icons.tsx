const normalizedPath = require("path").join(__dirname, "assets");

const icons: { [prop: string]: string; } = { };

require("fs").readdirSync(normalizedPath).forEach((file: string) => {
  const fileName = file.split('.')[0];
  icons[fileName] = require(`../assets/icons/${file}`);
});

export default icons;