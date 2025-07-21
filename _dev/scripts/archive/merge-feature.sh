#!/bin/bash

# merge-feature.sh - Merge feature branch into main for any project
#
# USAGE:
#   ./scripts/merge-feature.sh [options]
#
# OPTIONS:
#   -p, --project <name>   Specify project name (required if script called from labs directory)
#   -b, --branch <name>    Specify branch name to merge (defaults to current branch)
#   -s, --squash           Merge with squash (combine all commits into one)
#   --no-delete            Don't delete branch after merging
#   -h, --help             Display this help message
#
# DESCRIPTION:
#   This script merges a feature branch into the main branch for any project in the labs directory.
#   It handles stashing uncommitted changes, pulling latest changes from main, 
#   performing the merge, and pushing the changes to the remote repository.
#
# EXAMPLES:
#   ./scripts/merge-feature.sh                  - Merge current branch into main (when run from project dir)
#   ./scripts/merge-feature.sh -p tracker       - Merge current branch into tracker's main
#   ./scripts/merge-feature.sh -b feature-123   - Merge branch feature-123 into main
#   ./scripts/merge-feature.sh -s               - Squash merge current branch into main
#   ./scripts/merge-feature.sh --no-delete      - Don't delete branch after merging

# Set default values
PROJECT=""
BRANCH=""
SQUASH=false
DELETE_BRANCH=true

# Function to display usage information
show_help() {
  echo "Usage: $0 [options]"
  echo 
  echo "Options:"
  echo "  -p, --project <name>   Specify project name"
  echo "  -b, --branch <name>    Specify branch name to merge (defaults to current branch)"
  echo "  -s, --squash           Merge with squash (combine all commits into one)"
  echo "  --no-delete            Don't delete branch after merging"
  echo "  -h, --help             Display this help message"
  echo
  echo "Examples:"
  echo "  $0                     - Merge current branch into main (when run from project dir)"
  echo "  $0 -p tracker          - Merge current branch into tracker's main"
  echo "  $0 -b feature-123      - Merge branch feature-123 into main"
  echo "  $0 -s                  - Squash merge current branch into main"
  exit 0
}

# Parse command-line arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--project)
      PROJECT="$2"
      shift 2
      ;;
    -b|--branch)
      BRANCH="$2"
      shift 2
      ;;
    -s|--squash)
      SQUASH=true
      shift
      ;;
    --no-delete)
      DELETE_BRANCH=false
      shift
      ;;
    -h|--help)
      show_help
      ;;
    *)
      echo "Unknown option: $1"
      show_help
      ;;
  esac
done

# Determine if we're in a project directory or in the labs directory
CURRENT_DIR=$(pwd)
LABS_DIR="/Users/danielreis/labs"

if [[ "$CURRENT_DIR" == "$LABS_DIR" ]]; then
  # We're in the labs directory - project name is required
  if [ -z "$PROJECT" ]; then
    echo "Error: Project name is required when running from labs directory"
    echo "Available projects:"
    ls -d "$LABS_DIR"/*/ | grep -v "scripts" | xargs basename -a
    echo
    echo "Use -p or --project option to specify project"
    exit 1
  fi
  
  PROJECT_DIR="$LABS_DIR/$PROJECT"
else
  # We're likely in a project directory
  PROJECT=${PROJECT:-$(basename "$CURRENT_DIR")}
  PROJECT_DIR="$CURRENT_DIR"
fi

# Verify project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Error: Project directory '$PROJECT_DIR' not found"
  exit 1
fi

# Change to project directory
cd "$PROJECT_DIR" || { echo "Failed to change to project directory"; exit 1; }

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo "Error: Not a git repository: $PROJECT_DIR"
  exit 1
fi

# Get current branch if not specified
if [ -z "$BRANCH" ]; then
  BRANCH=$(git branch --show-current)
  
  # Check if we're already on main
  if [ "$BRANCH" == "main" ]; then
    echo "Error: Already on main branch. Please switch to feature branch first."
    exit 1
  fi
fi

echo "Project: $PROJECT"
echo "Feature branch: $BRANCH"
echo "Will merge '$BRANCH' into 'main'"

# Stash any uncommitted changes
CHANGES_STASHED=false
if [ -n "$(git status --porcelain)" ]; then
  echo "Stashing uncommitted changes..."
  git stash push -m "Auto-stash before merging $BRANCH to main"
  CHANGES_STASHED=true
fi

# Make sure the branch exists
if ! git show-ref --verify --quiet refs/heads/"$BRANCH"; then
  echo "Error: Branch '$BRANCH' does not exist"
  exit 1
fi

# Ensure we have the latest changes from remote
echo "Updating from remote repository..."
git fetch --all

# Switch to the feature branch and pull latest changes
echo "Switching to feature branch: $BRANCH"
git checkout "$BRANCH" || { echo "Failed to switch to branch $BRANCH"; exit 1; }
git pull origin "$BRANCH" || echo "No remote branch found or failed to pull from $BRANCH"

# Switch to main branch and pull latest changes
echo "Switching to main branch..."
git checkout main || { echo "Failed to switch to main branch"; exit 1; }
git pull origin main || { echo "Failed to pull latest changes from main"; exit 1; }

# Perform the merge
echo "Merging changes from $BRANCH into main..."
if [ "$SQUASH" = true ]; then
  echo "Performing squash merge..."
  git merge --squash "$BRANCH" || { echo "Merge conflict! Please resolve conflicts and complete the merge manually"; exit 1; }
  git commit -m "Merge branch '$BRANCH' into main (squashed)" || { echo "Failed to commit merge"; exit 1; }
else
  git merge --no-ff "$BRANCH" -m "Merge branch '$BRANCH' into main" || { echo "Merge conflict! Please resolve conflicts and complete the merge manually"; exit 1; }
fi

# Push changes to remote
echo "Pushing changes to remote repository..."
git push origin main || { echo "Failed to push changes to main"; exit 1; }

# Delete branch if requested
if [ "$DELETE_BRANCH" = true ]; then
  read -p "Do you want to delete the branch '$BRANCH'? (y/N) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deleting branch $BRANCH locally..."
    git branch -d "$BRANCH" || git branch -D "$BRANCH"
    
    # Check if remote branch exists before trying to delete it
    if git ls-remote --exit-code --heads origin "$BRANCH" > /dev/null; then
      echo "Deleting branch $BRANCH from remote..."
      git push origin --delete "$BRANCH" || echo "Failed to delete remote branch (it may have already been deleted)"
    fi
  fi
fi

# Pop stashed changes if we stashed them
if [ "$CHANGES_STASHED" = true ]; then
  echo "Restoring previously stashed changes..."
  git stash pop || { echo "Warning: Failed to restore stashed changes. Use 'git stash list' and 'git stash apply' manually"; }
fi

echo "✅ Merge complete! '$BRANCH' has been successfully merged into main for project '$PROJECT'"
