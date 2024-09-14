export const GuestUsersSocketMiddleware = (socket, next) => {
    if (socket.handshake.query && socket.handshake.query.token) {
    } else {
        next(new AuthTokenSignatureError('Invalid Authentication Signature'));
    }
}