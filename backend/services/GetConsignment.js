const axios = require('axios');
const { sendResponse, sendError } = require('./ResponseService');  // remove if service doesn't send response
const mockConsignment = require('../test/mock/consignment.json');
const API_URL = 'https://sampleapionly.com/hatdog';



async function fetchConsignmentOTW() {
    console.log('Fetching consignment OTW');
    return mockConsignment;
}


class Consignment {
    // logic for counting the number of consignments
    getNumberofConsignments(apiData) {
            let count = 0;

            if(Array.isArray(apiData)) {
                apiData.forEach(item => {
                    count += this.getNumberofConsignments(item);
                });
            } else if (typeof apiData === 'object' && apiData !== null) {
                if ('consignmentId' in apiData) {
                    count = 1;
                } else {
                    for (const key in apiData) {
                        count += this.getNumberofConsignments(apiData[key]);
                    }
                }
            }
            return count;
    }   
    // Logic for counting the number of Consignments that are going to the factory/in progress
    // BASE LOGIC:
    /*
        To be changed in the future, since they are changing the json structure
        Logic will be changed to: Wherein if there is data on dateCompleted but no date processed it should return a count 
        making it count of consignments that are in progress/going to the factory 
    */
    getNumberOfConsignmentOTW(apiData) {
        let count = 0;

        if (Array.isArray(apiData)) {
            apiData.forEach(item => {
                count += this.getNumberOfConsignmentOTW(item);
            });
        } else if (typeof apiData === 'object' && apiData !== null) {
            // KEY LOGIC: consignment is on the way to the factory
            if (
                'consignmentId' in apiData &&
                'dateCompleted' in apiData &&
                'dateProcessed' in apiData &&
                apiData.dateCompleted !== null &&
                apiData.dateProcessed !== null
            ) {
                count = 1;
            } else {
                for (const key in apiData) {
                    count += this.getNumberOfConsignmentOTW(apiData[key]);
                }
            }
        }

        return count;
    }
}
module.exports = {
    fetchConsignmentOTW,
    Consignment,
};


