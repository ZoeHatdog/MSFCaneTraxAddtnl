




const currentDate = new Date().toISOString();


const sendResponse = (res, status, data, message = "Success Fetching Consignment Cards") => {
    res.status(status).json({
        success: true,
        message,
        data
    });
};

const sendError = (res, status = 500, message = "Failed to Fetch Consignment Cards") => {
    res.status(status).json({
        success: false,
        message,
    });
    console.log('Status: ' + status + ' Message: ' + message + ' Date: ' + currentDate);
};  

module.exports = {
    sendResponse,
    sendError,
};