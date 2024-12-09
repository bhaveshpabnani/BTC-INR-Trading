const io = require('socket.io-client');  // Importing socket.io-client
const fs = require('fs');                // File system module for saving files
const path = require('path');            // Path module to define file paths

// WebSocket server URL
const serverUrl = 'https://fawss.pi42.com/';

// Create a new socket connection
const socket = io(serverUrl);

// Define the path to save the data in a JSON format
const klineJsonFile = path.join(__dirname, 'kline_data.json');

let klineDataCollection = {};  // Object to store the latest Kline data for each startTime

// Event listener for when the connection is open
socket.on('connect', () => {
  console.log('Connected to WebSocket server');
  subscribeToTopics();  // Call the function to subscribe to topics after connection
});

// Event listener for when the connection is closed
socket.on('disconnect', () => {
  console.log('Disconnected from WebSocket server');
});

// Event listener for errors
socket.on('error', (error) => {
  console.error('Socket.IO error:', error);
});

// Function to subscribe to various WebSocket topics
function subscribeToTopics() {
  const topics = ['btcinr@kline_1m'];  // Topics to subscribe to

  // Subscribe to each topic by emitting 'subscribe' event
  socket.emit('subscribe', {
    params: topics,  // Sends the topics array to the WebSocket server
  });

  socket.on('kline', (data) => {
    storeKlineData(data);
  });
}

// Function to store Kline data and keep only the latest data for each time window
function storeKlineData(klineData) {
  // Extract necessary fields from the 'k' object in the data
  const kline = klineData.k;
  
  // Create a unique key based on the start time
  const klineKey = kline.t; // Using the start time as the key
  
  // Store the Kline data in the object, updating it for the same time window
  klineDataCollection[klineKey] = {
    startTime: kline.t,   // Start time of the Kline
    endTime: kline.T,     // End time of the Kline
    open: kline.o,        // Open price
    close: kline.c,       // Close price
    high: kline.h,        // Highest price
    low: kline.l,         // Lowest price
    volume: kline.v       // Volume
  };

  console.log(`${Object.keys(klineDataCollection).length}`);

  // Optionally, you can define a condition to save and disconnect after a certain time or count
  if (Object.keys(klineDataCollection).length >= 1000) { // Example condition to limit to 10 unique KLINES
    console.log('Data collection complete. Disconnecting...');
    saveKlineDataToFile();  // Save data before disconnecting
    socket.disconnect();  // Stop receiving data after reaching the limit
  }
}

// Function to save collected Kline data into a JSON file
function saveKlineDataToFile() {
  // Convert the collected Kline data object into an array
  const finalKlineDataCollection = Object.values(klineDataCollection);

  fs.writeFile(klineJsonFile, JSON.stringify(finalKlineDataCollection, null, 2), (err) => {
    if (err) {
      console.error('Error writing Kline data to file:', err);
    } else {
      console.log(`Kline data has been saved to ${klineJsonFile}`);
    }
  });
}
