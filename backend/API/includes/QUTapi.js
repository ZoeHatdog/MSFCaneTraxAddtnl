const axios = require('axios');
const DateTime = require('date-time');

 
const QUT_API_BASE_URL = process.env.QUT_API_URL || 'https://your-3rd-party-api.example.com';


async function pulseCheck() {
    try {
        const response = await axios.get(QUT_API_BASE_URL, { timeout: 10000 });
        if (response.status >= 400) {
            console.log('QUT API Pulse: API is not working - got status ' + response.status + ' at ' + new DateTime().currentTime());
            return false;
        }
        return true;
    } catch (err) {
        // api is down or something went wrong
        if (err.response) {
            console.log('QUT API Pulse: API is not working - status ' + err.response.status + ' at ' + new DateTime().currentTime());
        } else if (err.code === 'ECONNABORTED') {
            console.log('QUT API Pulse: API is not working - request timed out at ' + new DateTime().currentTime());
        } else {
            console.log('QUT API Pulse: API is not working - ' + (err.message || err.code || 'connection failed') + ' at ' + new DateTime().currentTime());
        }
        return false;
    }
}

async function getQUTapi() {
    var ok = await pulseCheck();
    if (!ok) {
        return null;
    }
    try {
        const response = await axios.get(QUT_API_BASE_URL, { timeout: 10000 });
        
        var data = response.data;
        if (Array.isArray(data)) {
            return data;
        }
       
        if (data && Array.isArray(data.consignments)) {
            return data.consignments;
        }
        return data;
    } catch (err) {
        console.log('QUT API: fetch failed - ' + (err.message || err.code || 'unknown error'));
        return null;
    }
}

module.exports = {
    getQUTapi: getQUTapi,
    pulseCheck: pulseCheck
};
