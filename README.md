# Tailwind Purge Conflict

This repository demonstrates a common issue with Tailwind CSS's purge feature where classes fail to apply due to conflicts in how components are imported or used.  The `bug.js` file shows the problem, and `bugSolution.js` provides the solution.

## Problem

In certain project setups, Tailwind's purge functionality might incorrectly remove CSS classes, leading to styling issues. This often occurs when components are not properly included in the build process, causing Tailwind to not detect their classes.

## Solution

The solution involves correctly configuring Tailwind's `purge` option in your `tailwind.config.js` file to include all necessary files and components.  This ensures that Tailwind includes all the classes it needs.