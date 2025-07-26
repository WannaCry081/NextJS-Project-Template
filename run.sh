#!/usr/bin/env bash

cat << "EOF"
A Next.js Project Template! 🚀
__      __                    ___           __  ___ _ 
\ \    / /_ _ _ _  _ _  __ _ / __|_ _ _  _ /  \( _ ) |
 \ \/\/ / _` | ' \| ' \/ _` | (__| '_| || | () / _ \ |
  \_/\_/\__,_|_||_|_||_\__,_|\___|_|  \_, |\__/\___/_|
                                      |__/            

EOF

read -p "Enter project name: " project_name

# Check if the project name is empty
if [ -z "$project_name" ]; then
  echo "Project name cannot be empty. Exiting."
  exit 1
fi

# Rename the current directory to the project name
echo "Renaming current directory to: $project_name"
mv "$(dirname "$PWD")/$(basename "$PWD")" "$(dirname "$PWD")/$project_name"

# Update the "name" field in package.json
echo "Updating package.json with project name: $project_name"
if [ -f package.json ]; then
  tmpfile=$(mktemp)
  jq --arg name "$project_name" '.name = $name' package.json > "$tmpfile" && mv "$tmpfile" package.json
else
  echo "package.json not found. Skipping name update."
fi

# Remove existing git history
echo "Removing existing git history..."
rm -rf .git

# Initialize a new git repository
echo "Initializing a new git repository..."
git init 
git add . 
git commit -m "Initial commit"

echo "Thanks for using the Next.js Project Template! 🎉"

# Remove run.sh script after execution
echo "Cleaning up..."

sleep 5

clear

cd "$(dirname "$PWD")/$project_name"

rm -rf run.sh
