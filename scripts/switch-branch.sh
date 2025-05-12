#!/bin/bash

# switch-branch.sh - Git branch management utility script
# 
# USAGE:
#   ./scripts/switch-branch.sh <branch-name>    - Switch to specified branch
#   ./scripts/switch-branch.sh --make-main      - Merge current branch into main
#   ./scripts/switch-branch.sh -m               - Same as --make-main
#
# DESCRIPTION:
#   This utility script simplifies Git branch management by handling common
#   operations like switching branches while preserving uncommitted changes
#   and merging feature branches into the main branch.
#
# FEATURES:
#   - Automatically stashes uncommitted changes before switching branches
#   - Pulls latest changes from remote after switching
#   - Restores stashed changes after switching
#   - Can merge current branch into main with the --make-main flag
#   - Offers option to delete the source branch after merging

# Check command line arguments
if [ "$1" == "-m" ] || [ "$1" == "--make-main" ]; then
    # Store current branch name
    CURRENT_BRANCH=$(git branch --show-current)
    echo "Making $CURRENT_BRANCH the new main branch..."

    # Stash any changes
    if [ -n "$(git status --porcelain)" ]; then
        echo "Stashing uncommitted changes..."
        git stash push -m "Auto-stash before updating main"
        CHANGES_STASHED=true
    fi

    # Switch to main and merge
    git checkout main
    git pull origin main
    git merge $CURRENT_BRANCH
    git push origin main

    # Ask if user wants to delete the old branch
    read -p "Delete the old branch $CURRENT_BRANCH? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git branch -d $CURRENT_BRANCH
        git push origin --delete $CURRENT_BRANCH
    fi

    exit 0
fi

# Check if branch name is provided
if [ -z "$1" ]; then
    echo "Usage: ./switch-branch.sh <branch-name>"
    exit 1
fi

BRANCH_NAME=$1

# Handle uncommitted changes by stashing them
if [ -n "$(git status --porcelain)" ]; then
    echo "Stashing uncommitted changes..."
    git stash push -m "Auto-stash before switching to $BRANCH_NAME"
    CHANGES_STASHED=true
fi

# Switch to the requested branch
git checkout $BRANCH_NAME

# Pull latest changes
git pull origin $BRANCH_NAME

# Restore stashed changes if any
if [ "$CHANGES_STASHED" = true ]; then
    echo "Restoring your uncommitted changes..."
    git stash pop
fi

echo "Successfully switched to $BRANCH_NAME and pulled latest changes"
