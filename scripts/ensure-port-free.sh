#!/bin/bash
# Ensure port 6006 is free before starting Storybook
PORT=6006
PID=$(lsof -ti tcp:$PORT)
if [ ! -z "$PID" ]; then
  echo "[ensure-port-free] Port $PORT is in use by PID $PID. Killing..."
  kill -9 $PID
  sleep 1
else
  echo "[ensure-port-free] Port $PORT is free."
fi
