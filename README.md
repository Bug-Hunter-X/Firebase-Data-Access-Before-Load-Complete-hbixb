# Firebase Data Access Before Load Complete

This repository demonstrates a common issue when working with Firebase and its asynchronous nature: accessing data from a document snapshot before the data has fully loaded. This often results in unexpected errors because the accessed values might be undefined. The example shows how to implement proper error handling and data loading techniques to resolve this issue.

## Steps to Reproduce:

1.  Clone this repository.
2.  Set up a Firebase project and configure it correctly. 
3.  Run the `firebaseBug.js` file.  Observe the error.
4.  Run the `firebaseBugSolution.js` file to observe the corrected approach.

## Solution
The solution involves ensuring data is fully loaded before accessing properties.  We do this using an explicit check for existence or awaiting the snapshot's data to ensure it is ready. 