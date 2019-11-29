#!/bin/bash

set -e

echo "Starting CodingTree server..."

serve -p 80 -s build/.
