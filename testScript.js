const { addEvent, getAllEvents, getUpcomingEvents, getEventsByCategory, setReminder } = require("/home/usmanali/Documents/SCD LAB/Lab7/EVENT-PLANNER/src/events.js");
const fs = require("fs");

const DATA_FILE = "./data/events.json";
fs.writeFileSync(DATA_FILE, JSON.stringify([])); 

console.log("Running Tests...\n");

const event1 = addEvent("Team Meeting", "Monthly team sync-up", "2025-03-15", "Meeting", true);
console.log("Event added:", event1);

const allEvents = getAllEvents();
console.log("All Events shown:", allEvents);

const sortedEvents = getUpcomingEvents();
console.log("Upcoming Events:", sortedEvents);

const meetings = getEventsByCategory("Meeting");
console.log("Meetings:", meetings);

const updatedEvent = setReminder(1, false);
console.log("Reminder updated:", updatedEvent || "Event not found");

console.log("\nAll Tests Completed!");
