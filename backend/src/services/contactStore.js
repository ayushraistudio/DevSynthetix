import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.resolve(__dirname, "../../data/contacts.json");

export async function saveContact(entry) {
  const raw = await fs.readFile(dataFile, "utf-8");
  const existing = JSON.parse(raw);

  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ...entry
  };

  existing.push(record);
  await fs.writeFile(dataFile, JSON.stringify(existing, null, 2));

  return record;
}

export async function getContacts() {
  const raw = await fs.readFile(dataFile, "utf-8");
  return JSON.parse(raw);
}
