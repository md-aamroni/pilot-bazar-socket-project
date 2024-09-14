/**
 * Get the invalid request exception object
 * @param {*} error 
 * @returns 
 */
export const HttpInvalidRequestException = (error) => {
    return {
        errors: error || 'No response received from server',
        status: 500
    }
}

/**
 * Get the internal server exception object
 * @param {*} error 
 * @returns 
 */
export const HttpInternalServerException = (error) => {
    return {
        errors: error || 'Internal server error',
        status: 500
    }
}

/**
 * Get the data validation exception object
 * @param {*} errors 
 * @param {*} status 
 * @returns 
 */
export const HttpDataValidationException = (errors, status = 422) => {
    return {
        errors: errors,
        status: status
    }
}