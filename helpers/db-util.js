import { MongoClient } from 'mongodb';

const dbusername = process.env.mongodb_username;
const dbpassword = process.env.mongodb_password;
const dbconnection = '@cluster0.ewevp.mongodb.net/';
const dbname = 'nextEvents';
const dbprefix = 'mongodb+srv://';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    `${dbprefix}${dbusername}:${dbpassword}${dbconnection}${dbname}`
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();

  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
