const fs = require("fs");

const DATA_FILE = "./data/events.json";

// Load events from JSON file
const loadEvents = () => JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

// Save events to JSON file
const saveEvents = (events) => fs.writeFileSync(DATA_FILE, JSON.stringify(events, null, 2));

// Add a new event
const addEvent = (name, description, date, category, reminder) => {
  const events = loadEvents();
  const newEvent = { id: events.length + 1, name, description, date, category, reminder };
  events.push(newEvent);
  saveEvents(events);
  return newEvent;
};

// Get all events
const getAllEvents = () => loadEvents();

// Get upcoming events sorted by date
const getUpcomingEvents = () => loadEvents().sort((a, b) => new Date(a.date) - new Date(b.date));

// Get events by category
const getEventsByCategory = (category) => 
  loadEvents().filter(event => event.category.toLowerCase() === category.toLowerCase());

// Set event reminder
const setReminder = (id, reminder) => {
  const events = loadEvents();
  const event = events.find(e => e.id === id);
  if (!event) return null;
  event.reminder = reminder;
  saveEvents(events);
  return event;
};

module.exports = { addEvent, getAllEvents, getUpcomingEvents, getEventsByCategory, setReminder };
