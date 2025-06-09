#!/bin/bash
#############################################################
#   _____                           _    _           _      #
#  |  __ \                         | |  | |         | |     #
#  | |__) | __ ___ _ __   __ _ _ __| |__| | ___   __| |     #
#  |  ___/ '__/ _ \ '_ \ / _` | '__|  __  |/ _ \ / _` |     #
#  | |   | | |  __/ |_) | (_| | |  | |  | | (_) | (_| |     #
#  |_|   |_|  \___| .__/ \__,_|_|  |_|  |_|\___/ \__,_|     #
#                 | |  Version Update Tool                  #
#                 |_|  for Lab Projects                     #
#############################################################

# prepare-version-update.sh - Creates a new version branch for any project
#
# USAGE:
#   ./prepare-version-update.sh           - Interactive mode
#   ./prepare-version-update.sh <project> - Update specific project
#
# DESCRIPTION:
#   This script creates a new version branch for any project in the labs directory.
#   It handles bumping version numbers in relevant files, updating changelogs,
#   and setting up a clean feature branch for the next version update.
#
# EXAMPLES:
#   ./prepare-version-update.sh           - Run with interactive project selection
#   ./prepare-version-update.sh tracker   - Prepare version update for tracker project
#   ./prepare-version-update.sh note      - Prepare version update for note project

# Colors for better output
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
BLUE="\033[0;34m"
RED="\033[0;31m"
CYAN="\033[0;36m"
BOLD="\033[1m"
RESET="\033[0m"

# Directory where all lab projects are stored
LABS_DIR="/Users/danielreis/labs"

# Error handling function
handle_error() {
    echo -e "\n${RED}ERROR: $1${RESET}"
    exit 1
}

# Set up trap to catch Ctrl+C and other termination signals
trap 'echo -e "\n${YELLOW}⚠️ Operation cancelled by user${RESET}"; exit 1' INT TERM

# Function to get available projects with current versions
get_available_projects() {
    # Return just directory names if called with argument
    if [ "$1" = "names_only" ]; then
        ls -d "$LABS_DIR"/*/ | grep -v "scripts" | xargs basename -a
        return
    fi
    
    # Otherwise display with more info
    local dirs=($(ls -d "$LABS_DIR"/*/ | grep -v "scripts" | xargs basename -a))
    
    for dir in "${dirs[@]}"; do
        local full_path="$LABS_DIR/$dir"
        
        # Skip if not a directory
        if [ ! -d "$full_path" ]; then
            continue
        fi
        
        # Get version from index.html if available
        local version=""
        if [ -f "$full_path/index.html" ]; then
            version=$(grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' "$full_path/index.html" | head -n 1)
        elif [ -f "$full_path/package.json" ]; then
            # Otherwise try package.json
            version="v$(grep -o '"version": "[0-9]\+\.[0-9]\+\.[0-9]\+"' "$full_path/package.json" | 
                 head -n 1 | sed 's/"version": "\(.*\)"/\1/')"
        fi
        
        # If version is empty, show as "unknown"
        if [ -z "$version" ]; then
            version="unknown"
        fi
        
        echo "$dir|$version"
    done
}

# Interactive mode if no arguments provided
if [ -z "$1" ]; then
    echo -e "${BLUE}┌────────────────────────────────────────────┐${RESET}"
    echo -e "${BLUE}│${RESET}       ${YELLOW}INTERACTIVE VERSION UPDATE TOOL${RESET}     ${BLUE}│${RESET}"
    echo -e "${BLUE}└────────────────────────────────────────────┘${RESET}"
    
    echo -e "\n${BOLD}Available Projects:${RESET}"
    
    # Get projects with versions
    IFS=$'\n' read -d '' -r -a project_data < <(get_available_projects)
    projects=()
    versions=()
    
    # Parse project data
    for entry in "${project_data[@]}"; do
        IFS='|' read -r project_name project_version <<< "$entry"
        projects+=("$project_name")
        versions+=("$project_version")
    done
    
    # Display projects with version info and formatted output
    for i in "${!projects[@]}"; do
        proj_name="${projects[$i]}"
        proj_ver="${versions[$i]}"
        
        # Color the version based on availability
        if [ "$proj_ver" = "unknown" ]; then
            ver_display="${YELLOW}$proj_ver${RESET}"
        else
            ver_display="${CYAN}$proj_ver${RESET}"
        fi
        
        # Display formatted project entry
        printf "  ${BOLD}%2d.${RESET} %-15s %s\n" "$((i+1))" "${proj_name}" "$ver_display"
    done
    
    # Get user selection with validation
    while true; do
        echo -e "\n${BLUE}Enter project number:${RESET}"
        read -p "> " project_choice
        
        if [[ "$project_choice" =~ ^[0-9]+$ ]] && 
           [ "$project_choice" -ge 1 ] && 
           [ "$project_choice" -le "${#projects[@]}" ]; then
            PROJECT_NAME="${projects[$((project_choice-1))]}"
            echo -e "\n${GREEN}✓${RESET} Selected project: ${CYAN}${BOLD}$PROJECT_NAME${RESET}"
            break
        else
            echo -e "${RED}Invalid selection. Please enter a number between 1 and ${#projects[@]}.${RESET}"
        fi
    done
else
    PROJECT_NAME="$1"
    # Verify that provided project exists
    if ! get_available_projects "names_only" | grep -q "^$PROJECT_NAME$"; then
        echo -e "${RED}Error: Project '$PROJECT_NAME' not found in labs directory.${RESET}"
        echo -e "\n${BLUE}Available projects:${RESET}"
        get_available_projects "names_only" | sed 's/^/  - /'
        exit 1
    fi
fi

PROJECT_DIR="/Users/danielreis/labs/$PROJECT_NAME"

# Verify project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo -e "${RED}Error: Project directory '$PROJECT_DIR' not found${RESET}"
    echo -e "${BLUE}Available projects:${RESET}"
    get_available_projects | xargs -I {} echo "  - {}"
    exit 1
fi

# Get current version from the project
echo -e "\n${BLUE}Analyzing project files...${RESET}"

# Check if index.html exists
if [ ! -f "$PROJECT_DIR/index.html" ]; then
    handle_error "Could not find index.html in project directory: $PROJECT_DIR"
fi

# Attempt to extract version from index.html
echo -e "  ${YELLOW}»${RESET} Reading version from index.html..."
current_version=$(grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' "$PROJECT_DIR/index.html" | head -n 1 | sed 's/v//')

# If not found in index.html, try package.json as fallback
if [ -z "$current_version" ] && [ -f "$PROJECT_DIR/package.json" ]; then
    echo -e "  ${YELLOW}»${RESET} Trying to read version from package.json..."
    current_version=$(grep -o '"version": "[0-9]\+\.[0-9]\+\.[0-9]\+"' "$PROJECT_DIR/package.json" | head -n 1 | sed 's/"version": "\(.*\)"/\1/')
fi

# Final check if we found a version
if [ -z "$current_version" ]; then
    handle_error "Could not find version number in project files.\nThe version should be in the format 'vX.Y.Z' in index.html or \"version\": \"X.Y.Z\" in package.json."
fi

# Split version into components
IFS='.' read -r major minor patch <<< "$current_version"

# Validate version format
if [[ ! "$major" =~ ^[0-9]+$ ]] || [[ ! "$minor" =~ ^[0-9]+$ ]] || [[ ! "$patch" =~ ^[0-9]+$ ]]; then
    handle_error "Invalid version format: v$current_version\nVersion must be in the format X.Y.Z where X, Y, and Z are numbers."
fi

echo -e "  ${GREEN}✓${RESET} Found current version: ${CYAN}v${BOLD}$current_version${RESET}"

# Show version update selection UI
echo -e "\n${BLUE}┌────────────────────────────────────────────┐${RESET}"
echo -e "${BLUE}│${RESET}         ${YELLOW}VERSION UPDATE SELECTION${RESET}         ${BLUE}│${RESET}"
echo -e "${BLUE}└────────────────────────────────────────────┘${RESET}"

echo -e "\n${YELLOW}What type of update is this?${RESET} (Select a number)"
echo -e "  ${BOLD}1.${RESET} ${GREEN}PATCH${RESET}: Bug fixes, no API changes"
echo -e "     └─ ${CYAN}v$major.$minor.$((patch + 1))${RESET}"
echo -e "     └─ ${BLUE}Use for:${RESET} Performance improvements, bug fixes, tiny features"
echo -e 
echo -e "  ${BOLD}2.${RESET} ${BLUE}MINOR${RESET}: New features (backwards compatible)"
echo -e "     └─ ${CYAN}v$major.$((minor + 1)).0${RESET}"
echo -e "     └─ ${BLUE}Use for:${RESET} New functionality without breaking existing API"
echo -e
echo -e "  ${BOLD}3.${RESET} ${YELLOW}MAJOR${RESET}: Breaking changes"
echo -e "     └─ ${CYAN}v$((major + 1)).0.0${RESET}"
echo -e "     └─ ${BLUE}Use for:${RESET} Incompatible API changes, major redesigns"

# Get user selection with input validation
while true; do
    read -p "Your choice (1-3): " update_type
    if [[ "$update_type" =~ ^[1-3]$ ]]; then
        break
    else
        echo -e "${YELLOW}Invalid selection. Please enter 1, 2, or 3.${RESET}"
    fi
done

# Set new version based on the update type
case $update_type in
    1)
        new_version="$major.$minor.$((patch + 1))"
        update_type_name="patch"
        version_color="${GREEN}"
        ;;
    2)
        new_version="$major.$((minor + 1)).0"
        update_type_name="minor"
        version_color="${BLUE}"
        ;;
    3)
        new_version="$((major + 1)).0.0"
        update_type_name="major"
        version_color="${YELLOW}"
        ;;
esac

echo -e "  ${GREEN}✓${RESET} Selected ${version_color}${update_type_name}${RESET} update: ${CYAN}v${BOLD}$new_version${RESET}"

today=$(date +%Y-%m-%d)

echo -e "\n${GREEN}New version:${RESET} v$new_version (${update_type_name} update)"

# Check git repository and prepare branch
echo -e "\n${BLUE}Checking git repository status...${RESET}"
if [ ! -d "$PROJECT_DIR/.git" ]; then
    # Check if parent directory is a git repository
    if [ ! -d "$(dirname "$PROJECT_DIR")/.git" ]; then
        echo -e "${RED}Error: Not in a git repository.${RESET} This script must be run from within a git repository."
        exit 1
    fi
    
    # We're in a subdirectory of a git repository
    cd "$(dirname "$PROJECT_DIR")"
    echo -e "  ${YELLOW}»${RESET} Using parent git repository at: ${GREEN}$(pwd)${RESET}"
else
    echo -e "  ${GREEN}✓${RESET} Found git repository in project directory"
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "  ${YELLOW}⚠️${RESET} You have uncommitted changes in your working directory"
    echo -e "  ${BLUE}ℹ️${RESET} These changes won't be included in the version update branch"
    read -p "Continue anyway? [Y/n] " -n 1 -r
    echo    # Move to a new line
    if [[ ! $REPLY =~ ^[Yy]$ ]] && [[ ! -z $REPLY ]]; then
        echo -e "  ${YELLOW}Operation cancelled by user${RESET}"
        exit 1
    fi
fi

# Check if the branch already exists
echo -e "\n${BLUE}Checking for branch conflicts...${RESET}"
branch_name="feature/$PROJECT_NAME-v$new_version"
if git show-ref --verify --quiet "refs/heads/$branch_name"; then
    echo -e "  ${RED}Error: Branch '$branch_name' already exists.${RESET}"
    echo -e "  Please remove the existing branch or choose a different version."
    exit 1
fi

# Make sure we're on the main branch first
current_branch=$(git branch --show-current)
main_branch_name=""

# Check if main or master branch exists and which one is the default
if git show-ref --verify --quiet "refs/heads/main"; then
    main_branch_name="main"
elif git show-ref --verify --quiet "refs/heads/master"; then
    main_branch_name="master"
else
    echo -e "  ${YELLOW}⚠️${RESET} Neither 'main' nor 'master' branch found"
    echo -e "  ${BLUE}ℹ️${RESET} Creating feature branch from current branch: ${YELLOW}$current_branch${RESET}"
fi

# Switch to main branch if we're not already on it and it exists
if [ ! -z "$main_branch_name" ] && [ "$current_branch" != "$main_branch_name" ]; then
    echo -e "  ${YELLOW}»${RESET} Switching to $main_branch_name branch for a clean start"
    git checkout "$main_branch_name"
    
    # Pull latest changes
    echo -e "  ${YELLOW}»${RESET} Pulling latest changes from remote"
    git pull origin "$main_branch_name" --quiet
    
    if [ $? -ne 0 ]; then
        echo -e "  ${YELLOW}⚠️${RESET} Failed to pull latest changes, continuing anyway"
    else
        echo -e "  ${GREEN}✓${RESET} Updated $main_branch_name branch from remote"
    fi
fi

# Create new feature branch
echo -e "\n${BLUE}Creating feature branch...${RESET}"
git checkout -b "$branch_name"
echo -e "  ${GREEN}✓${RESET} Created new feature branch: ${YELLOW}$branch_name${RESET}"

# Update version in index.html using perl for better compatibility
perl -pi -e "s/v[0-9]+\\.[0-9]+\\.[0-9]+/v$new_version/" "$PROJECT_DIR/index.html"

# Update version in project files
echo -e "\n${BLUE}Updating version references in files...${RESET}"
echo -e "  ${GREEN}✓${RESET} Updated version in index.html: ${YELLOW}v$current_version${RESET} → ${GREEN}v$new_version${RESET}"

# Project-specific updates
if [ -f "$PROJECT_DIR/styles/main.css" ]; then
    # Check if the file contains a version string to update
    if grep -q "content: \"v[0-9]\+\.[0-9]\+\.[0-9]\+\"" "$PROJECT_DIR/styles/main.css"; then
        # Update version in styles/main.css - specifically target the content property with version
        sed -i '' "s/content: \"v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+\"/content: \"v$new_version\"/" "$PROJECT_DIR/styles/main.css"
        echo -e "  ${GREEN}✓${RESET} Updated version in styles/main.css: ${YELLOW}v$current_version${RESET} → ${GREEN}v$new_version${RESET}"
    else
        echo -e "  ${BLUE}ℹ️${RESET} No version reference found in styles/main.css"
    fi
else
    echo -e "  ${BLUE}ℹ️${RESET} No styles/main.css found in project"
fi

# Check for package.json and update version if it exists
if [ -f "$PROJECT_DIR/package.json" ]; then
    if grep -q "\"version\":" "$PROJECT_DIR/package.json"; then
        # Update version in package.json
        perl -i -pe "s/\"version\": \"[0-9]+\.[0-9]+\.[0-9]+\"/\"version\": \"$new_version\"/" "$PROJECT_DIR/package.json"
        echo -e "  ${GREEN}✓${RESET} Updated version in package.json: ${YELLOW}v$current_version${RESET} → ${GREEN}v$new_version${RESET}"
    else
        echo -e "  ${YELLOW}⚠️${RESET} package.json found but contains no version field"
    fi
fi

# Read the feature description from user input
echo -e "\n${BLUE}Enter a short description for this feature:${RESET}"
echo -e "${YELLOW}Example: 'Theme Toggle Enhancements' or 'Bug Fix for Navigation'${RESET}"
read -p "> " feature_description

# Use a default if the user didn't enter anything
if [ -z "$feature_description" ]; then
    feature_description="Version Update v$new_version"
    echo -e "${YELLOW}Using default description: ${RESET}'$feature_description'"
fi

# Check if CHANGELOG.md exists
echo -e "\n${BLUE}Updating CHANGELOG.md...${RESET}"
if [ -f "$PROJECT_DIR/CHANGELOG.md" ]; then
    # Check if CHANGELOG has a table of contents to update
    if grep -q "^## Table of Contents" "$PROJECT_DIR/CHANGELOG.md"; then
        echo -e "  ${YELLOW}»${RESET} Found Table of Contents format"
        
        # Add new version section to CHANGELOG.md and update table of contents
        awk -v ver="$new_version" -v date="$today" -v desc="$feature_description" '
        BEGIN { 
            table_updated = 0;
            print_line = 1;
        }
        /^## Table of Contents/ {
            print;
            while (getline line) {
                if (line ~ /^-/) {
                    if (!table_updated && line !~ /\[Unreleased\]/) {
                        # Add new version entry right after Unreleased
                        link = ver;
                        gsub(/\./, "", link);
                        printf("- [%s](#%s) - %s\n", ver, link, desc);
                        table_updated = 1;
                    }
                }
                print line;
                if (line !~ /^-/) break;
            }
            next;
        }
        /^## \[Unreleased\]/ {
            print $0 "\n";
            print "## [" ver "] - " date "\n";
            next;
        }
        { if (print_line) print }
        ' "$PROJECT_DIR/CHANGELOG.md" > "$PROJECT_DIR/CHANGELOG.md.tmp" && mv "$PROJECT_DIR/CHANGELOG.md.tmp" "$PROJECT_DIR/CHANGELOG.md"
        echo -e "  ${GREEN}✓${RESET} Updated Table of Contents with new version"
        echo -e "  ${GREEN}✓${RESET} Added new version section after Unreleased"
    else
        echo -e "  ${YELLOW}»${RESET} Found standard CHANGELOG format"
        # Simple update for changelogs without table of contents
        sed -i '' "/^## \[Unreleased\]/a\\
\\
## [$new_version] - $today\\
\\
" "$PROJECT_DIR/CHANGELOG.md"
        echo -e "  ${GREEN}✓${RESET} Added new version section to CHANGELOG.md"
    fi
else
    echo -e "  ${YELLOW}⚠️${RESET} No CHANGELOG.md found in project"
    echo -e "  ${BLUE}ℹ️${RESET} Consider creating a CHANGELOG.md file to track version changes"
fi

echo -e "\n${GREEN}✓ Created feature branch:${RESET} ${YELLOW}feature/$PROJECT_NAME-v$new_version${RESET}"

# Prepare git commit
echo -e "\n${BLUE}Staging files for commit...${RESET}"
files_to_commit=()

# Add index.html
git add "$PROJECT_DIR/index.html"
files_to_commit+=("index.html")

# Add styles/main.css if it exists and was modified
if [ -f "$PROJECT_DIR/styles/main.css" ] && git diff --name-only --cached | grep -q "styles/main.css"; then
    git add "$PROJECT_DIR/styles/main.css"
    files_to_commit+=("styles/main.css")
fi

# Add package.json if it exists and was modified
if [ -f "$PROJECT_DIR/package.json" ]; then
    git add "$PROJECT_DIR/package.json"
    if git diff --name-only --cached | grep -q "package.json"; then
        files_to_commit+=("package.json")
    fi
fi

# Add CHANGELOG.md if it exists
if [ -f "$PROJECT_DIR/CHANGELOG.md" ]; then
    git add "$PROJECT_DIR/CHANGELOG.md"
    files_to_commit+=("CHANGELOG.md")
fi

# Show summary of files to be committed
echo -e "${BLUE}Files staged for commit:${RESET}"
for file in "${files_to_commit[@]}"; do
    echo -e "  ${GREEN}+${RESET} $file"
done

# Commit the changes
echo -e "\n${BLUE}Committing changes...${RESET}"
commit_msg="chore($PROJECT_NAME): start feature v$new_version - $feature_description"
git commit -m "$commit_msg"

echo -e "\n${GREEN}✓${RESET} ${BLUE}Version update complete!${RESET}"
echo -e "  ${GREEN}•${RESET} Branch:      ${YELLOW}feature/$PROJECT_NAME-v$new_version${RESET}"
echo -e "  ${GREEN}•${RESET} Version:     ${YELLOW}v$current_version${RESET} → ${GREEN}v$new_version${RESET}"
echo -e "  ${GREEN}•${RESET} Update type: ${BLUE}$update_type_name${RESET}"
echo -e "  ${GREEN}•${RESET} Commit:      ${YELLOW}$commit_msg${RESET}"

# Print next steps with fancy formatting
echo -e "\n${BLUE}┌────────────────────────────────────────────┐${RESET}"
echo -e "${BLUE}│${RESET}              ${YELLOW}NEXT STEPS${RESET}                  ${BLUE}│${RESET}"
echo -e "${BLUE}└────────────────────────────────────────────┘${RESET}"
echo -e "  ${GREEN}1.${RESET} Make your changes to project ${GREEN}$PROJECT_NAME${RESET}"
echo -e "  ${GREEN}2.${RESET} Stage and commit your feature work"
echo -e "  ${GREEN}3.${RESET} When ready, use ${YELLOW}merge-feature.sh${RESET} to merge back to main"
echo -e ""
echo -e "  ${BLUE}Happy coding! 🚀${RESET}"
