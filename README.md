# Unofficial Discord type declarations

## Installation & Usage
`npm install discord-typings`

This module only exports type definitions and interfaces which can be used as type references. The index only exports an empty Object. Trying to access members in code may return undefined or throw an Error. So... Don't do that.

The latest version of this module will only export the latest-as-of-publish typings from Discord's API docs. The earliest version is API/Gateway V9. If you wish to install an earlier typed API/Gateway version, refer to the latest major release of the desired version.

Anywhere you can reference types such as in JSDoc annotations, you can use this module.

## Disclaimer
This module makes a best effort at following Discord's API docs, staying up to date, and providing as much as possible while staying consistent to their naming scheme. This module does not export properties not outlined in Discord's API docs.
