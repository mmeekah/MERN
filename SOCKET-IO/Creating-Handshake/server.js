const express = require('express');
const app = express();

const server = app.listen(8000, ()=>{
    console.log("The server is all fired up on port 8000")
})

//Initiaize socket
const io = require("socket.io")(server);


io.on("connection", socket =>{
    console.log(socket.id);
    console.log("Nice to meet you. (shake hand)")


    io.emit('check 123')
    socket.emit('check 456');
    console.log('emits done')
    socket.on("event_from_client", data =>{
        socket.broadcast.email("send_data_to_all_other_clients", data)
    })

})