import fs from 'fs';
import path from 'path';

export async function getAllProducts() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}