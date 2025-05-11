#!/bin/bash

# Check if branch name is provided
if [ -z "$1" ]; then
    echo "Usage: ./switch-branch.sh <branch-name>"
    exit 1
fi

BRANCH_NAME=$1

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Switch to the requested branch
git checkout $BRANCH_NAME

# Pull latest changes
git pull origin $BRANCH_NAME

echo "Successfully switched to $BRANCH_NAME and pulled latest changes"
