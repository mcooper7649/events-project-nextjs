import { connectToDatabase } from './db-util';
import { DUMMY_EVENTS } from '../dummy-data';

export async function getAllEvents() {
  let client;
  try {
    client = await connectToDatabase();
    const docs = await client.db().collection('events').find().sort({ date: 1 }).toArray();
    return docs.map(({ _id, ...event }) => ({ id: _id, ...event }));
  } catch (error) {
    return DUMMY_EVENTS;
  } finally {
    if (client) client.close();
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
