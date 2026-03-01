const { fetchConsignmentOTW, Consignment } = require('../services/GetConsignment');
const { sendResponse, sendError } = require('../services/ResponseService');





// Returns all consignments that are "on the way"
async function getConsignmentOTW(req, res) {
    try {
        const data = await fetchConsignmentOTW();
        sendResponse(res, 200, data);
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch consignment cards';
        const status = error.response?.status || 500;
        sendError(res, status, message);
    }
}

// Uses the Consignment class to return the total number of consignments OTW
async function getConsignmentCount(req, res) {
    try {
        const data = await fetchConsignmentOTW();
        const consignment = new Consignment();
        const total = consignment.getNumberOfConsignmentOTW(data);

        sendResponse(res, 200, total, 'Success fetching consignment count');
    } catch (error) {
        const message = error.response?.data?.message || error.message || 'Failed to fetch consignment count';
        const status = error.response?.status || 500;
        sendError(res, status, message);
    }
}

module.exports = {
    getConsignmentOTW,
    getConsignmentCount,
};
