<p align="center">
    <img alt="Goblin Base Server" src="https://gbase-public-static.ams3.cdn.digitaloceanspaces.com/rmg.png" width="300">
  </a>
</p>

<p align="center">
  Goblin Base Server is an open-source backend based on Node.js, Redis and MongoDB made for game/web/apps developers. It's scalable enough to cover thousands of requests per second, tens of thousands DAU, and provide a comfortable realtime multiplayer for a growing player base.
</p>

---

This repository represents basic usage of Goblin Base Server implementing it with default configurations and a default set of Cloud Functions.

## This is a good point to start working with Goblin Base Server

[![Discord Chat](https://img.shields.io/discord/635771686133694464.svg)](https://discord.gg/CuJeNV4)

## Getting started

1. Clone or download this repository;
2. Install and run software: [Node.js](https://nodejs.org/en/), [Redis](https://redis.io/) and [MongoDB](https://www.mongodb.com/) of latest versions;
   1. If you on Windows - try to install this [Redis](https://github.com/microsoftarchive/redis/releases) or just deploy [cloud Redis](https://redislabs.com/redis-enterprise-cloud/essentials-pricing/) for free;
   2. Also you can try a [cloud MongoDB](https://mlab.com/plans/pricing/) instead of local.
3. Edit preferences file `preferences.json`:
    1. `START_AT_HOST` and `START_AT_PORT` - where to run server. `127.0.0.1` for localhost and `0.0.0.0` for public;
    2. Point the `MONGODB_HOST`, `MONGODB_PORT`, `MONGODB_DATABASE_NAME`, `REDIS_HOST` and `REDIS_PORT` to connect to;
    3. `HMAC_SECRET` stands for communication protection. You can leave it default for development purposes;
    4. `TURN_ON_CORS` keep it true if no reverse proxy used.
4. Actually run the Server: `$ cd goblin-base-server-bootstrap && node index.js`;
5. Use [pm2](https://www.npmjs.com/package/pm2) if possible: `$ pm2 ./pm2process.json`

## Cloud functions

All cloud functions are stored at `cloudFunctions` directory of the repository. You can put your own - they will be caught up automatically. Don't make subdirectories - or just modify `index.js` code to scan subdirectories too.

### Use this repository as a starting point to discover Goblin Tech stack

 - Goblin Base Server's repository: https://github.com/red-machine-games/goblin-base-server
 - Documentation: https://gbase.tech/doc

# LICENSE
License of this particular repository: MIT