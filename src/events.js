const fs = require("fs");

const DATA_FILE = "/home/usmanali/Documents/SCD LAB/Lab7/EVENT-PLANNER/data/events.json";

// Ensure the file exists before reading
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const loadEvents = () => {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  } catch (error) {
    return []; // Return empty array if file is corrupt
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
  loadEvents().filter(event => event.category.toLowerCase() === category
