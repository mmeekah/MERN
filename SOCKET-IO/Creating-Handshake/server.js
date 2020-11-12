// const express = require('express');
// const app = express();

// const server = app.listen(8000, ()=>{
//     console.log("The server is all fired up on port 8000")
// })

// //Initiaize socket
// const io = require("socket.io")(server);


// io.on("connection", socket =>{
//     console.log(socket.id);
//     console.log("Nice to meet you. (shake hand)")


//     io.emit('check 123')
//     socket.emit('check 456');
//     console.log('emits done')
//     socket.on("event_from_client", data =>{
//         socket.broadcast.email("send_data_to_all_other_clients", data)
//     })

// })


const express = require('express'),
    port = 8000,
    app = express(),
    cors = require('cors'),
    server = app.listen(port,() => console.log(`Listening on port ${port}`)),
    io = require('socket.io')(server);


app.use(cors());


const chats = [];


io.on('connection', socket => {
    console.log(socket.id);

    socket.broadcast.emit("joined","another client joined the chat");

    //emit sends data only to the client that sent the event
    socket.emit("Welcome", {msg:"Hello from the server"});

    socket.on("addToChat",data => {
        socket.emit("sent","You send a message");
        chats.push(data);

        // sends to all clients
        io.emit("updatingMessages",chats);
    })
})