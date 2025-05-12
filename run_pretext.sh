#!/bin/bash

# This script runs PreText to process .ptx files and generate output.

# Define the source and output directories
SOURCE_DIR="source"
OUTPUT_DIR="output"

# Ensure the output directory exists
mkdir -p "$OUTPUT_DIR"

# Run PreText processing (adjust the command as needed for your setup)
pretext build --source="$SOURCE_DIR" --output="$OUTPUT_DIR"

# Notify the user
echo "PreText processing complete. Output is in the '$OUTPUT_DIR' directory."
