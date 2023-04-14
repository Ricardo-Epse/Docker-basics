let times = 0

const syncDb = () => {
times++;
console.log('Ticket', times)

return times;
}

module.exports = {
    syncDb
}