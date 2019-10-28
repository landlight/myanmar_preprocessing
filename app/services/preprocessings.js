const MM_STOPS = ["။", "၊"];

function isWhiteSpace(text) {
    if (text.trim().length == 0) {
        return true;
    }
    return false;
}

function isMMStop(text) {
    return MM_STOPS.includes(text);
}

module.exports = {
    isWhiteSpace,
    isMMStop
}