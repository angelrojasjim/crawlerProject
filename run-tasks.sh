#!/bin/bash

# Run npm start in the background
npm start &
START_PID=$!

# Sleep for 10 seconds (or adjust the duration)
sleep 10

# Kill the npm start process
kill $START_PID
echo "npm start terminated"

# Run npm test
npm test