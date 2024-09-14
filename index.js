import express from "express";
import { createServer as CreateServer } from "node:http";
import * as DotENV from "./config/baseConfig.mjs";
import { SocketService } from "./app/Services/SocketService.mjs";
import { __filename, __dirname, filePath, viewPath } from "./config/fileSystem.mjs";
import { SuiteChatSocketIO } from "./app/Servers/SuiteChatSocketIO.mjs";
import { GroupChatSocketIO } from "./app/Servers/GroupChatSocketIO.mjs";
import { AnynomousSocketIO } from "./app/Servers/AnynomousSocketIO.mjs";
import AccountRouter from './router/account.mjs'
import bodyParser from "body-parser";
import { ExceptionManager } from "./app/Utilities/ExceptionManager.mjs";
import UAParser from 'ua-parser-js'

const app = express();

app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', viewPath);
app.use(express.static(filePath));
app.set('trust proxy', true);

// parse application/x-www-form-urlencoded && application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Socket Connection Handler
const ws = CreateServer(app);
const io = SocketService(ws);

// Socket Namespace or Others Server
SuiteChatSocketIO(io)
GroupChatSocketIO(io)
AnynomousSocketIO(io)

// Define socket & app routes
app.get("/", (req, res) => {
    const agent = UAParser(req.headers['user-agent']);
    const parse = (req.headers['x-forwarded-for'] || req.socket.remoteAddress).replace('::ffff:', '')
    return res.render('index', { agent, parse })
});

app.use('/account', AccountRouter)

io.on("connection", (socket) => {
    console.log('User connected ID: ' + socket.id);
    socket.emit('ping', {
        message: 'Hi there! Your have connected successfully',
        connect: socket.id
    })

    socket.on('message', () => {
        // Code Here...
    })

    socket.on('disconnect', () => {
        console.log('user disconnected ID: ' + socket.id);
    });
});


app.use(ExceptionManager)

// HTTP connection listener
ws.listen(DotENV.APP_PORT, () => {
    console.log(`Server started on ${DotENV.APP_BASE}`);
});
