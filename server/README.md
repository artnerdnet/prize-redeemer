# Server

## Install and start
`npm install` and `npm run dev` to run the project.

## Start the DB
Start it with: `brew services start postgresql`
Command prompt: `psql -d postgres -U me`

## Products Status

| code | status | description |
|---|---|---|
| 0 | unavailable | product has no stock left |
| 1 | available | product has stock left |
| 2 | redeemable | product can be redeemed with current points |
| 3 | redeemed  | product has been redeemed |
| 4 | unredeemable | product can't be redeemed due to lack of points |

