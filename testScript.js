const { addEvent, getAllEvents, getUpcomingEvents, getEventsByCategory, setReminder } = require("./events");
const fs = require("fs");

// Mock the data file for testing
const DATA_FILE = "./data/events.json";
fs.writeFileSync(DATA_FILE, JSON.stringify([])); // Start with empty data

console.log("Running Tests...\n");

// Test adding an event
const event1 = addEvent("Team Meeting", "Monthly team sync-up", "2025-03-15", "Meeting", true);
console.log("Event added:", event1);

// Test getting all events
const allEvents = getAllEvents();
console.log("All Events:", allEvents);

// Test getting upcoming events (sorted)
const sortedEvents = getUpcomingEvents();
console.log("Upcoming Events:", sortedEvents);

// Test filtering by category
const meetings = getEventsByCategory("Meeting");
console.log("Meetings:", meetings);

// Test setting a reminder
const updatedEvent = setReminder(1, false);
console.log("Reminder updated:", updatedEvent || "Event not found");

console.log("\nAll Tests Completed!");
