#!/bin/bash

#############################################################
#   _____                                   _____           #
#  |  __ \                                 |  __ \          #
#  | |__) |   _ _ __  _ __   ___ _ __       | |__) |   _ _ __ #
#  |  _  / | | | '_ \| '_ \ / _ \ '__|      |  _  / | | | '_ \#
#  | | \ \ |_| | | | | | | |  __/ |         | | \ \ |_| | | |#
#  |_|  \_\__,_|_| |_|_| |_|\___|_|         |_|  \_\__,_|_| |_|
#                                                             #
#  Script Runner for Lab Project Management                  #
#  Choose from available automation scripts                  #
#############################################################

# ANSI color codes for enhanced display
BOLD='\033[1m'
DIM='\033[2m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
PURPLE='\033[0;35m'
RESET='\033[0m'

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LABS_DIR="$(dirname "$SCRIPT_DIR")"

# Change to labs directory for consistent execution
cd "$LABS_DIR" || {
    echo -e "${RED}Error: Could not navigate to labs directory${RESET}"
    exit 1
}

show_header() {
    clear
    echo -e "${CYAN}┌────────────────────────────────────────────┐${RESET}"
    echo -e "${CYAN}│${RESET}       ${BOLD}LAB PROJECT SCRIPT RUNNER${RESET}       ${CYAN}│${RESET}"
    echo -e "${CYAN}└────────────────────────────────────────────┘${RESET}"
    echo ""
}

show_menu() {
    echo -e "${BOLD}Available Scripts:${RESET}"
    echo ""
    echo -e "   ${YELLOW}1.${RESET} ${BOLD}Version Update Tool${RESET}"
    echo -e "      ${DIM}└─ Interactive version bumping and release management${RESET}"
    echo -e "      ${DIM}└─ Supports PATCH, MINOR, and MAJOR updates${RESET}"
    echo ""
    echo -e "   ${YELLOW}2.${RESET} ${BOLD}Feature Branch Merger${RESET}"
    echo -e "      ${DIM}└─ Merge feature branches into main with proper workflow${RESET}"
    echo -e "      ${DIM}└─ Automated git operations and cleanup${RESET}"
    echo ""
    echo -e "   ${YELLOW}q.${RESET} ${DIM}Quit${RESET}"
    echo ""
}

run_version_update() {
    echo -e "${BLUE}🚀 Launching Version Update Tool...${RESET}"
    echo ""
    sleep 1
    
    if [[ -x "$SCRIPT_DIR/prepare-version-update.sh" ]]; then
        "$SCRIPT_DIR/prepare-version-update.sh"
    else
        echo -e "${RED}Error: prepare-version-update.sh not found or not executable${RESET}"
        return 1
    fi
}

run_feature_merger() {
    echo -e "${BLUE}🚀 Launching Feature Branch Merger...${RESET}"
    echo ""
    sleep 1
    
    if [[ -x "$SCRIPT_DIR/merge-feature.sh" ]]; then
        "$SCRIPT_DIR/merge-feature.sh"
    else
        echo -e "${RED}Error: merge-feature.sh not found or not executable${RESET}"
        return 1
    fi
}

# Main execution loop
main() {
    while true; do
        show_header
        show_menu
        
        echo -n "Select a script to run (1-2, q): "
        read -r choice
        echo ""
        
        case $choice in
            1)
                run_version_update
                if [[ $? -eq 0 ]]; then
                    echo ""
                    echo -e "${GREEN}✓ Version update completed${RESET}"
                else
                    echo ""
                    echo -e "${RED}✗ Version update failed or was cancelled${RESET}"
                fi
                echo ""
                echo -e "${DIM}Press Enter to return to main menu...${RESET}"
                read -r
                ;;
            2)
                run_feature_merger
                if [[ $? -eq 0 ]]; then
                    echo ""
                    echo -e "${GREEN}✓ Feature merge completed${RESET}"
                else
                    echo ""
                    echo -e "${RED}✗ Feature merge failed or was cancelled${RESET}"
                fi
                echo ""
                echo -e "${DIM}Press Enter to return to main menu...${RESET}"
                read -r
                ;;
            q|Q|quit|exit)
                echo -e "${CYAN}Thanks for using Lab Project Runner!${RESET}"
                exit 0
                ;;
            *)
                echo -e "${RED}Invalid choice. Please select 1, 2, or q.${RESET}"
                echo ""
                echo -e "${DIM}Press Enter to continue...${RESET}"
                read -r
                ;;
        esac
    done
}

# Check if scripts exist and are executable
check_dependencies() {
    local missing_scripts=()
    
    if [[ ! -x "$SCRIPT_DIR/prepare-version-update.sh" ]]; then
        missing_scripts+=("prepare-version-update.sh")
    fi
    
    if [[ ! -x "$SCRIPT_DIR/merge-feature.sh" ]]; then
        missing_scripts+=("merge-feature.sh")
    fi
    
    if [[ ${#missing_scripts[@]} -gt 0 ]]; then
        echo -e "${RED}Error: Missing or non-executable scripts:${RESET}"
        for script in "${missing_scripts[@]}"; do
            echo -e "  ${RED}✗${RESET} $script"
        done
        echo ""
        echo -e "${YELLOW}Please ensure all scripts are present and executable:${RESET}"
        echo -e "  ${DIM}chmod +x scripts/*.sh${RESET}"
        exit 1
    fi
}

# Handle command line arguments for direct script execution
if [[ $# -gt 0 ]]; then
    case $1 in
        --version-update|version|update)
            run_version_update
            exit $?
            ;;
        --merge-feature|merge|feature)
            run_feature_merger
            exit $?
            ;;
        --help|-h|help)
            show_header
            echo -e "${BOLD}Usage:${RESET}"
            echo -e "  ${0##*/}                    ${DIM}# Interactive menu${RESET}"
            echo -e "  ${0##*/} version             ${DIM}# Run version update tool${RESET}"
            echo -e "  ${0##*/} merge               ${DIM}# Run feature merger${RESET}"
            echo -e "  ${0##*/} --help              ${DIM}# Show this help${RESET}"
            echo ""
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${RESET}"
            echo -e "Use ${BOLD}$0 --help${RESET} for usage information."
            exit 1
            ;;
    esac
fi

# Run dependency check and start main program
check_dependencies
main
