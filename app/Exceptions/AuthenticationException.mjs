/**
 * Get the unauthenticated user exception object
 * @param {*} message 
 * @returns 
 */
export const UnauthenticatedUserException = (message) => {
    return {
        errors: message || 'Unauthenticated',
        status: 401
    }
}