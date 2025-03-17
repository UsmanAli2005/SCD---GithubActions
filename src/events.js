const fs = require("fs");

const DATA_FILE = "./data/events.json";

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const loadEvents = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch (error) {
    return []; 
  }
};

const saveEvents = (events) => fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2));

const addEvent = (name, description, date, category, reminder) => {
  const events = loadEvents();
  const newEvent = { id: events.length + 1, name, description, date, category, reminder };
  events.push(newEvent);
  saveEvents(events);
  return newEvent;
};

const getAllEvents = () => loadEvents();

const getUpcomingEvents = () => loadEvents().sort((a, b) => new Date(a.date) - new Date(b.date));

const getEventsByCategory = (category) => 
  loadEvents().filter(event => event.category.toLowerCase() === category.toLowerCase());

const setReminder = (id, reminder) => {
  const events = loadEvents();
  const event = events.find(e => e.id === id);
  if (!event) return null;
  event.reminder = reminder;
  saveEvents(events);
  return event;
};

module.exports = { addEvent, getAllEvents, getUpcomingEvents, getEventsByCategory, setReminder };
