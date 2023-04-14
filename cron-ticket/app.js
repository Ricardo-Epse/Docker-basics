var cron = require('node-cron');
const { syncDb } = require('./tasks/sync-db');

let times = 0;

cron.schedule('* * * * * *', syncDb);

console.log('Inicio')

