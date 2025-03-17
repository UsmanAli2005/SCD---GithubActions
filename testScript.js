const { addEvent, getAllEvents, getUpcomingEvents, getEventsByCategory, setReminder } = require("./src/events");
const fs = require("fs");

const DATA_FILE = "./data/events.json";
fs.writeFileSync(DATA_FILE, JSON.stringify([]));

const event2 = addEvent("Project Deadline", "Final submission for project", "2025-04-01", "Work", "17409504007000", true);
console.log("Event added:", event2);

const allEvents = getAllEvents();
console.log("All Events:", allEvents);

const upcoming = getUpcomingEvents();
console.log("Upcoming Events:", upcoming);

const categoryEvents = getEventsByCategory("Meeting");
console.log("Meetings:", categoryEvents);

const updatedReminder = setReminder(1, false);
console.log("Reminder updated:", updatedReminder || "Event not found");

console.log("\nAll Tests Completed!");
