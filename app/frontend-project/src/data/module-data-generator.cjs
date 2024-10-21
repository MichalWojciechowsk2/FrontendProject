const fs = require("fs");

const count = Number(process.argv[2]);
if (isNaN(count) || count <= 0) {
  console.error("Please enter a valid number of objects to generate.");
  process.exit(1);
}

let brands = [];

function getRandomDate(startYear, endYear) {
  const year =
    Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
    2,
    "0"
  )}`;
}

function getRandomPlate() {
  const letters = "ABCDEFGHIJKLMNOPRSTUWXYZ";
  const digits = "0123456789";
  let plate = "";

  for (let i = 0; i < 3; i++) {
    plate += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  for (let i = 0; i < 5; i++) {
    plate += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return plate;
}

fs.readFile("./brands.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading car brand file: ", err);
    return;
  }
  brands = data
    .split("\n")
    .map((s) => s.trim())
    .filter((b) => b.length != 0);

  let content = "export const data = [\n";

  for (let i = 0; i < count; i++) {
    const car = {
      id: i + 1,
      brand: brands[Math.floor(Math.random() * brands.length)],
      productionDate: getRandomDate(1990, 2024),
      plate: getRandomPlate(),
      color: ["red", "blue", "white", "silver", "black"][
        Math.floor(Math.random() * 5)
      ],
    };

    content += `  ${JSON.stringify(car)},\n`;
  }

  content += "];\n";

  fs.writeFile("./module-data.jsx", content, (err) => {
    if (err) {
      console.error("File save error:", err);
    } else {
      console.log("File module-data.js generated.");
    }
  });
});
