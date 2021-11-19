export async function getAllEvents() {
  const response = await fetch(
    "https://next-js-course-9dc05-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
}

const events = [];

for (const key in data){
    events.push({
        id: key,
        ...data[key]
    })
    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}


export async function getEventById(id) {
    return allEvents.find((event) => event.id === id);
  }