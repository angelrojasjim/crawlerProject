#!/bin/bash

# Run npm start in the background
npm start &
START_PID=$!

# Sleep for 10 seconds (or adjust the duration)
sleep 10

# Define the file to move
FILE="$HOME/Downloads/myThings.json"

# Define the target directory
TARGET_DIR="out"

# Check if the file exists
if [ -f "$FILE" ]; then
  # Move the file to the target directory
  mv "$FILE" "$TARGET_DIR/"
  echo "$FILE moved to $TARGET_DIR/"
else
  echo "$FILE does not exist"
fi


# Kill the npm start process
kill $START_PID
echo "npm start terminated"

# Run npm test
npm test