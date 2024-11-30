import { writeFile } from "fs";

// Define the possible values for categories and brands
const categories = ["laptop", "mobile"];
const brands = ["asus", "lenovo", "hp", "acer"];

// Function to generate a unique 8-digit ID
function generateUniqueID(existingIDs) {
  const id = Math.floor(100 + Math.random() * 900).toString();
  if (!existingIDs.has(id)) {
    return id;
  }
  return generateUniqueID(existingIDs); // Recursively generate a new ID if the current one is not unique
}

// Function to generate a full name for the item
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

  // Append a unique number to ensure the name is unique
  let uniqueName = name;
  let counter = 1;
  while (existingNames.has(uniqueName)) {
    uniqueName = `${name} ${counter}`;
    counter++;
  }

  return uniqueName;
}

// Function to generate a random rate between 0 and 5
function generateRate() {
  return (Math.random() * 5).toFixed(2);
}

// Function to generate a random image URL
function generateImageURL(brand, name) {
  return `https://example.com/images/${brand}/${name.replace(" ", "_")}.jpg`;
}

// Generate the data
const data = [];
const existingIDs = new Set();
const existingNames = new Set();

for (let i = 0; i < 50; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const name = generateName(category, brand, existingNames);
  const rate = generateRate();
  const image_url = generateImageURL(brand, name);
  const availability = ["in stock", "out of stock"][
    Math.floor(Math.random() * 2)
  ];
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
    image_url,
    rate,
  });
}

// Convert the data to a CSV string
const csvContent = data
  .map(
    (item) =>
      `${item.id},${item.availability},${item.category},${item.brand},${item.price},${item.name},${item.rate},${item.image_url}`
  )
  .join("\n");

// Write the CSV content to a file
writeFile(
  "items.csv",
  "id,availability,category,brand,price,name,rate,image_url\n" + csvContent,
  (err) => {
    if (err) throw err;
    console.log("CSV file generated successfully");
  }
);
