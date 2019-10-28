function IsRequired(item) {
    return {
        message: `${item} is required.`
    }
}

function IsNotObject(item, type) {
    return {
        message: `${item} must be type: ${type}`
    }
}

function OutOfBound(item, start, end) {
    return {
        message: `${item} must be between ${start} and ${end}.`
    }
}

function Unauthorized(){
    return {
        message: `Unauthorized`
    }
}

function Forbidden() {
    return {
        message: `Permission denied.`
    }
}

function DefaultError(error, res) {
    let errMessage = !error.message? error: error.message;
    return res.status(500).json({message: errMessage});
}

function NotImplemented() {
    return {
        message: 'Not Implemented'
    }
}

function SizeNegative() {
    return {
        message: 'Size cannot be negative.'
    }
}

function NotFound(item) {
    return {
        message: `${item} not found.`
    }
}

function RejectNotFound(item) {
    return `${item} not found.`
}

module.exports = {
    IsRequired,
    IsNotObject,
    OutOfBound,
    Unauthorized,
    NotImplemented,
    Forbidden,
    DefaultError,
    SizeNegative,
    NotFound,
    RejectNotFound
}