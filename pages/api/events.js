import { getAllEvents } from '../../helpers/api-util';

// Keyed by id, same shape the old Firebase RTDB endpoint returned.
async function handler(req, res) {
  const events = await getAllEvents();
  res.status(200).json(Object.fromEntries(events.map(({ id, ...event }) => [id, event])));
}

export default handler;
