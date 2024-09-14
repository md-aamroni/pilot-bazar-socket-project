export const GroupChatSocketIO = (io) => {
    const namespace = io.of('/groupchat');

    namespace.on('connection', async (socket) => {
        // @todo: Connected Server
        console.log('Group Chat user connected ID: ' + socket.id);
        socket.emit('message', `Hi there, welcome back to group chat server: ${socket.id}`)
        namespace.to(socket.id).emit('pong', `Hi there, welcome back to group chat: ${socket.id}`);

        // @todo: Disconnect Server
        socket.on('disconnect', () => {
            console.log('Group Chat user disconnected ID: ' + socket.id);
        })
    })
}