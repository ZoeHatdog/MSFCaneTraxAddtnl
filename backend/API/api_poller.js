const { getQUTapi} = require('./includes/QUTapi.js');


getQUTapi();
setInterval(function () {
    getQUTapi();
}, 30000)