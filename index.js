'use strict';

const PREFS = require('./preferences.json');

var GoblinBase = require('goblin-base-server');

var goblinBase;

function configure(){
    goblinBase = GoblinBase.getGoblinBase()
        .hookLogs({ info: console.log, warn: console.log, error: console.error, fatal: console.error })
        .hookCloudFunctionsLogs({ info: console.log, warn: console.log, error: console.error, fatal: console.error })
        .configureDatabase({ connectionUrl: `mongodb://${PREFS.MONGODB_HOST}:${PREFS.MONGODB_PORT}/${PREFS.MONGODB_DATABASE_NAME}` })
        .configureRedis(new GoblinBase.RedisConfig()
            .setupSessionsClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 0 })
            .setupLeaderboardClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 1 })
            .setupMatchmakingClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 2 })
            .setupPvpRoomClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 3 })
            .setupSimpleGameplayClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 4 })
            .setupServiceClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 5 })
            .setupMaintenanceClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 6 })
            .setupResourceLockerClient(PREFS.REDIS_HOST, PREFS.REDIS_PORT, { db: 7 })
        )
        .includeAccounts()
        .includeProfiles()
        .includeTickets()
        .includeLeaderboards()
        .includeMatchmaking()
        .includePvp({
            apiPrefix: 'api/v0/',
            physicalHost: '127.0.0.1',
            physicalPort: 7332,
            displayPortWs: 7331,
            displayPortWss: 0,
            shareIPAddress: true,
            bindUdpOnPort: 54321,
            pairsCapacity: 50,
            attachMessageTimeAtRoom: true
        })
        .includeSimplePve()
        .includeCloudFunctions()
        .addPlatform({
            header: GoblinBase.PLATFORMS.STANDALONE,
            minimumVersion: '0.0.0',
            hmacSecretsMap: { '0.0.0': PREFS.HMAC_SECRET }
        });
    if(PREFS.TURN_ON_CORS){
        goblinBase.enableNodeCors();
    }

    requireCloudFunctions();
}
function requireCloudFunctions(){
    require('fs').readdirSync(require('path').join(__dirname, 'cloudFunctions')).forEach(filename => {
        if(filename.endsWith('.js')){
            goblinBase.requireAsCloudFunction(`./cloudFunctions/${filename}`);
        }
    });

    run();
}
function run(){
    goblinBase.start(PREFS.START_AT_PORT, PREFS.START_AT_HOST, 'api/v0/', () => process.send ? process.send('ready') : console.log(`"process.send('ready');"`));
}

configure();