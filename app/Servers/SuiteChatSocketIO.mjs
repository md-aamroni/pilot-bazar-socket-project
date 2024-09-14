export const SuiteChatSocketIO = (io) => {
    const namespace = io.of('/suitechat');

    namespace.on('connection', async (socket) => {
        // @todo: Connected Server
        console.log('Suite Chat user connected ID: ' + socket.id);
        socket.emit('message', `Hi there, welcome back to suite chat server: ${socket.id}`)
        namespace.to(socket.id).emit('pong', `Hi there, welcome back to suite chat: ${socket.id}`);

        // @todo: Disconnect Server
        socket.on('disconnect', () => {
            console.log('Suite Chat user disconnected ID: ' + socket.id);
        })
    })
}