import { Server } from "socket.io";

export const SocketService = (server) => {
    // @todo: Define the cors
    const cors = {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: false,
    };

    // @todo: Create the Socket IO server instance
    return new Server(server, {
        cors: cors,
    });
};
