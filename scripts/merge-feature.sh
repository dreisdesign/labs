#!/bin/bash

# merge-feature.sh - Merge feature branch into main for any project
#
# USAGE:
#   ./scripts/merge-feature.sh            - Run with interactive menu
#   ./scripts/merge-feature.sh [options]  - Run with command line options
#
# OPTIONS:
#   -p, --project <n>   Specify project name (required if script called from labs directory)
#   -b, --branch <n>    Specify branch name to merge (defaults to current branch)
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
#   ./scripts/merge-feature.sh                  - Run with interactive menu
#   ./scripts/merge-feature.sh -p tracker       - Merge current branch into tracker's main
#   ./scripts/merge-feature.sh -b feature-123   - Merge branch feature-123 into main
#   ./scripts/merge-feature.sh -s               - Squash merge current branch into main
#   ./scripts/merge-feature.sh --no-delete      - Don't delete branch after merging

# Set default values
PROJECT=""
BRANCH=""
SQUASH=false
DELETE_BRANCH=true
INTERACTIVE=false

# Colors for better output
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
RED="\033[0;31m"
RESET="\033[0m"

# Function to display usage information
show_help() {
  echo -e "${BLUE}Usage: $0 [options]${RESET}"
  echo 
  echo "Options:"
  echo "  -p, --project <name>   Specify project name"
  echo "  -b, --branch <name>    Specify branch name to merge (defaults to current branch)"
  echo "  -s, --squash           Merge with squash (combine all commits into one)"
  echo "  --no-delete            Don't delete branch after merging"
  echo "  -h, --help             Display this help message"
  echo
  echo "Examples:"
  echo "  $0                     - Run with interactive menu"
  echo "  $0 -p tracker          - Merge current branch into tracker's main"
  echo "  $0 -b feature-123      - Merge branch feature-123 into main"
  echo "  $0 -s                  - Squash merge current branch into main"
  exit 0
}

# Function to get available projects
get_available_projects() {
  ls -d "$LABS_DIR"/*/ | grep -v "scripts" | xargs basename -a
}

# Function to display interactive menu
display_interactive_menu() {
  clear
  echo -e "${YELLOW}=== Interactive Merge Feature Branch Tool ===${RESET}\n"
  
  # Step 1: Determine if we need to select a project
  CURRENT_DIR=$(pwd)
  LABS_DIR="/Users/danielreis/labs"
  
  if [[ "$CURRENT_DIR" == "$LABS_DIR" ]]; then
    echo -e "${BLUE}Select a project:${RESET}"
    projects=($(get_available_projects))
    
    for i in "${!projects[@]}"; do
      echo "  $((i+1)). ${projects[$i]}"
    done
    
    read -p "Enter project number: " project_choice
    
    if [[ "$project_choice" =~ ^[0-9]+$ ]] && [ "$project_choice" -ge 1 ] && [ "$project_choice" -le "${#projects[@]}" ]; then
      PROJECT="${projects[$((project_choice-1))]}"
      echo -e "Selected project: ${GREEN}$PROJECT${RESET}"
    else
      echo -e "${RED}Invalid selection. Exiting.${RESET}"
      exit 1
    fi
    
    PROJECT_DIR="$LABS_DIR/$PROJECT"
  else
    # We're likely in a project directory
    PROJECT=$(basename "$CURRENT_DIR")
    echo -e "Current project: ${GREEN}$PROJECT${RESET}"
    PROJECT_DIR="$CURRENT_DIR"
  fi
  
  # Verify project directory exists
  if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}Error: Project directory '$PROJECT_DIR' not found${RESET}"
    exit 1
  fi
  
  # Change to project directory
  cd "$PROJECT_DIR" || { echo -e "${RED}Failed to change to project directory${RESET}"; exit 1; }
  
  # Check if we're in a git repository
  if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    echo -e "${RED}Error: Not a git repository: $PROJECT_DIR${RESET}"
    exit 1
  fi
  
  # Step 3: Select branch (or use current)
  echo -e "\n${BLUE}Choose branch to merge:${RESET}"
  echo "  1. Use current branch"
  echo "  2. Select from available branches"
  echo "  3. Enter branch name manually"
  
  read -p "Enter choice: " branch_choice
  
  case $branch_choice in
    1)
      BRANCH=$(git branch --show-current)
      if [ "$BRANCH" == "main" ]; then
        echo -e "${RED}Error: Already on main branch. Please switch to a feature branch first.${RESET}"
        exit 1
      fi
      ;;
    2)
      echo -e "\n${BLUE}Available branches:${RESET}"
      branches=($(git branch | grep -v "main" | sed 's/^[ *]*//' | sort))
      
      if [ ${#branches[@]} -eq 0 ]; then
        echo -e "${RED}No branches found other than main.${RESET}"
        exit 1
      fi
      
      for i in "${!branches[@]}"; do
        echo "  $((i+1)). ${branches[$i]}"
      done
      
      read -p "Enter branch number: " branch_number
      
      if [[ "$branch_number" =~ ^[0-9]+$ ]] && [ "$branch_number" -ge 1 ] && [ "$branch_number" -le "${#branches[@]}" ]; then
        BRANCH="${branches[$((branch_number-1))]}"
      else
        echo -e "${RED}Invalid selection. Exiting.${RESET}"
        exit 1
      fi
      ;;
    3)
      read -p "Enter branch name: " BRANCH
      ;;
    *)
      echo -e "${RED}Invalid selection. Exiting.${RESET}"
      exit 1
      ;;
  esac
  
  # Step 4: Ask about squash merge
  echo -e "\n${BLUE}Merge options:${RESET}"
  echo "  1. Standard merge (preserve commit history)"
  echo "  2. Squash merge (combine all commits into one)"
  
  read -p "Enter choice: " squash_choice
  
  case $squash_choice in
    1)
      SQUASH=false
      ;;
    2)
      SQUASH=true
      ;;
    *)
      echo -e "${RED}Invalid selection. Using standard merge.${RESET}"
      SQUASH=false
      ;;
  esac
  
  # Step 5: Ask about deleting branch
  echo -e "\n${BLUE}After merge:${RESET}"
  echo "  1. Keep the branch"
  echo "  2. Delete the branch (locally and remote)"
  
  read -p "Enter choice: " delete_choice
  
  case $delete_choice in
    1)
      DELETE_BRANCH=false
      ;;
    2)
      DELETE_BRANCH=true
      ;;
    *)
      echo -e "${RED}Invalid selection. Branch will not be deleted.${RESET}"
      DELETE_BRANCH=false
      ;;
  esac
  
  # Step 6: Confirm all choices
  echo -e "\n${YELLOW}Summary:${RESET}"
  echo -e "  Project: ${GREEN}$PROJECT${RESET}"
  echo -e "  Branch to merge: ${GREEN}$BRANCH${RESET}"
  echo -e "  Merge type: ${GREEN}$([ "$SQUASH" = true ] && echo "Squash merge" || echo "Standard merge")${RESET}"
  echo -e "  After merge: ${GREEN}$([ "$DELETE_BRANCH" = true ] && echo "Delete branch" || echo "Keep branch")${RESET}"
  
  read -p "Proceed with merge? (y/N) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}Operation cancelled.${RESET}"
    exit 0
  fi
}

# Check if we're running in interactive mode (no arguments)
if [ $# -eq 0 ]; then
  INTERACTIVE=true
  display_interactive_menu
else
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
        echo -e "${RED}Unknown option: $1${RESET}"
        show_help
        ;;
    esac
  done
fi

# Determine if we're in a project directory or in the labs directory
CURRENT_DIR=$(pwd)
LABS_DIR="/Users/danielreis/labs"

if [[ "$CURRENT_DIR" == "$LABS_DIR" && -z "$INTERACTIVE" ]]; then
  # We're in the labs directory - project name is required
  if [ -z "$PROJECT" ]; then
    echo -e "${RED}Error: Project name is required when running from labs directory${RESET}"
    echo "Available projects:"
    ls -d "$LABS_DIR"/*/ | grep -v "scripts" | xargs basename -a
    echo
    echo "Use -p or --project option to specify project"
    exit 1
  fi
  
  PROJECT_DIR="$LABS_DIR/$PROJECT"
else
  # We're likely in a project directory or already set PROJECT in interactive mode
  PROJECT=${PROJECT:-$(basename "$CURRENT_DIR")}
  PROJECT_DIR="${PROJECT_DIR:-$CURRENT_DIR}"
fi

# Verify project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
  echo -e "${RED}Error: Project directory '$PROJECT_DIR' not found${RESET}"
  exit 1
fi

# Change to project directory
cd "$PROJECT_DIR" || { echo -e "${RED}Failed to change to project directory${RESET}"; exit 1; }

# Check if we're in a git repository
if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
  echo -e "${RED}Error: Not a git repository: $PROJECT_DIR${RESET}"
  exit 1
fi

# Get current branch if not specified
if [ -z "$BRANCH" ]; then
  BRANCH=$(git branch --show-current)
  
  # Check if we're already on main
  if [ "$BRANCH" == "main" ]; then
    echo -e "${RED}Error: Already on main branch. Please switch to feature branch first.${RESET}"
    exit 1
  fi
fi

echo -e "${YELLOW}Project:${RESET} $PROJECT"
echo -e "${YELLOW}Feature branch:${RESET} $BRANCH"
echo -e "Will merge '${GREEN}$BRANCH${RESET}' into '${GREEN}main${RESET}'"

# Stash any uncommitted changes
CHANGES_STASHED=false
if [ -n "$(git status --porcelain)" ]; then
  echo -e "${BLUE}Stashing uncommitted changes...${RESET}"
  git stash push -m "Auto-stash before merging $BRANCH to main"
  CHANGES_STASHED=true
fi

# Make sure the branch exists
if ! git show-ref --verify --quiet refs/heads/"$BRANCH"; then
  echo -e "${RED}Error: Branch '$BRANCH' does not exist${RESET}"
  exit 1
fi

# Ensure we have the latest changes from remote
echo -e "${BLUE}Updating from remote repository...${RESET}"
git fetch --all

# Switch to the feature branch and pull latest changes
echo -e "${BLUE}Switching to feature branch: $BRANCH${RESET}"
git checkout "$BRANCH" || { echo -e "${RED}Failed to switch to branch $BRANCH${RESET}"; exit 1; }
git pull origin "$BRANCH" || echo -e "${YELLOW}No remote branch found or failed to pull from $BRANCH${RESET}"

# Switch to main branch and pull latest changes
echo -e "${BLUE}Switching to main branch...${RESET}"
git checkout main || { echo -e "${RED}Failed to switch to main branch${RESET}"; exit 1; }
git pull origin main || { echo -e "${RED}Failed to pull latest changes from main${RESET}"; exit 1; }

# Perform the merge
echo -e "${BLUE}Merging changes from $BRANCH into main...${RESET}"
if [ "$SQUASH" = true ]; then
  echo -e "${YELLOW}Performing squash merge...${RESET}"
  git merge --squash "$BRANCH" || { echo -e "${RED}Merge conflict! Please resolve conflicts and complete the merge manually${RESET}"; exit 1; }
  git commit -m "Merge branch '$BRANCH' into main (squashed)" || { echo -e "${RED}Failed to commit merge${RESET}"; exit 1; }
else
  git merge --no-ff "$BRANCH" -m "Merge branch '$BRANCH' into main" || { echo -e "${RED}Merge conflict! Please resolve conflicts and complete the merge manually${RESET}"; exit 1; }
fi

# Push changes to remote
echo -e "${BLUE}Pushing changes to remote repository...${RESET}"
git push origin main || { echo -e "${RED}Failed to push changes to main${RESET}"; exit 1; }

# Delete branch if requested
if [ "$DELETE_BRANCH" = true ]; then
  if [ "$INTERACTIVE" = true ]; then
    # Already confirmed in interactive menu
    echo -e "${BLUE}Deleting branch $BRANCH locally...${RESET}"
    git branch -d "$BRANCH" || git branch -D "$BRANCH"
    
    # Check if remote branch exists before trying to delete it
    if git ls-remote --exit-code --heads origin "$BRANCH" > /dev/null; then
      echo -e "${BLUE}Deleting branch $BRANCH from remote...${RESET}"
      git push origin --delete "$BRANCH" || echo -e "${YELLOW}Failed to delete remote branch (it may have already been deleted)${RESET}"
    fi
  else
    read -p "Do you want to delete the branch '$BRANCH'? (y/N) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
      echo -e "${BLUE}Deleting branch $BRANCH locally...${RESET}"
      git branch -d "$BRANCH" || git branch -D "$BRANCH"
      
      # Check if remote branch exists before trying to delete it
      if git ls-remote --exit-code --heads origin "$BRANCH" > /dev/null; then
        echo -e "${BLUE}Deleting branch $BRANCH from remote...${RESET}"
        git push origin --delete "$BRANCH" || echo -e "${YELLOW}Failed to delete remote branch (it may have already been deleted)${RESET}"
      fi
    fi
  fi
fi

# Pop stashed changes if we stashed them
if [ "$CHANGES_STASHED" = true ]; then
  echo -e "${BLUE}Restoring previously stashed changes...${RESET}"
  git stash pop || { echo -e "${YELLOW}Warning: Failed to restore stashed changes. Use 'git stash list' and 'git stash apply' manually${RESET}"; }
fi

echo -e "${GREEN}✅ Merge complete! '$BRANCH' has been successfully merged into main for project '$PROJECT'${RESET}"
