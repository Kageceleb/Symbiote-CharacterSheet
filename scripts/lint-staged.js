#!/usr/bin/env node

// lint-staged.js - Run linters on staged files

module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  '*.{css,scss}': [
    'prettier --write',
  ],
  '*.{json,md}': [
    'prettier --write',
  ],
}; 