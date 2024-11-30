import { writeFile } from "fs";

const categories = ["laptop", "mobile"];
const brands = ["asus", "lenovo", "hp", "acer"];

function generateUniqueID(existingIDs) {
  const id = Math.floor(100 + Math.random() * 900).toString();
  if (!existingIDs.has(id)) {
    return id;
  }
  return generateUniqueID(existingIDs); // Recursively generate a new ID if the current one is not unique
}

function generateName(category, brand, existingNames) {
  let name = "";
  if (category === "laptop") {
    name = `${brand} ${
      ["X512", "VivoBook", "Zephyrus", "ProBook"][Math.floor(Math.random() * 4)]
    }`;
  } else if (category === "mobile") {
    name = `${brand} ${
      ["Z50", "Legion", "Pavilion", "Predator"][Math.floor(Math.random() * 4)]
    }`;
  }

  let uniqueName = name;
  let counter = 1;
  while (existingNames.has(uniqueName)) {
    uniqueName = `${name} ${counter}`;
    counter++;
  }

  return uniqueName;
}

function generateDescription() {
  return `High-quality ${
    ["laptop", "mobile"][Math.floor(Math.random() * 2)]
  } from ${
    brands[Math.floor(Math.random() * 4)]
  } with excellent performance and features. Appropriate for gaming. gaming fan and graphic card and the important point is high resolution. (144Hz)`;
}

function generateRate() {
  return (Math.random() * 5).toFixed(2);
}

const data = [];
const existingIDs = new Set();
const existingNames = new Set();

for (let i = 0; i < 50; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const name = generateName(category, brand, existingNames);
  const rate = generateRate();
  const availability = ["in stock", "out of stock"][
    Math.floor(Math.random() * 2)
  ];
  const description = generateDescription();
  const price = (Math.random() * 1200 + 300).toFixed(2);
  const id = generateUniqueID(existingIDs);
  existingIDs.add(id);
  existingNames.add(name);

  data.push({
    id,
    availability,
    category,
    brand,
    price,
    name,
    rate,
    description,
  });
}

const csvContent = data
  .map(
    (item) =>
      `${item.id},${item.availability},${item.category},${item.brand},${item.price},${item.name},${item.rate},${item.description}`
  )
  .join("\n");

writeFile(
  "items.csv",
  "id,availability,category,brand,price,name,rate,description\n" + csvContent,
  (err) => {
    if (err) throw err;
    console.log("CSV file generated successfully");
  }
);




