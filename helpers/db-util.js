import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://portfolio-mongo:27017/nextEvents';

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

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
