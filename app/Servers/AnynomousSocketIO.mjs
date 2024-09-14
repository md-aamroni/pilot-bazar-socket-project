export const AnynomousSocketIO = (io) => {
    const namespace = io.of('/anynomous');

    namespace.on('connection', async (socket) => {
        // @todo: Connected Server
        console.log('Anynomous user connected ID: ' + socket.id);
        socket.emit('welcome', `Hi there, welcome back to anynomous server: ${socket.id}`)
        namespace.emit('welcome', `A new user has joined to the server: ${socket.id}`);

        socket.on('register', (data) => {
            console.log(data)
        })

        // @todo: Disconnect Server
        socket.on('disconnect', () => {
            console.log('Anynomous user disconnected ID: ' + socket.id);
        })
    })
}