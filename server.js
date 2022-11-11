// require("dotenv").config();
// const express = require("express");
// const jwt = require("jsonwebtoken");
// const auth = require("./middlewares/auth");
// const fs = require("fs");
const port = 3000;

let a = 0,
    b = 0;
let totalA = 0;
let totalB = 0;
let totalVotes = 0;
const qId = "sefwqrqergerg";

// const app = express();

// app.use(express.json());

const io = require("socket.io")(port, {
    cors: {
        origin: ["http://localhost:5173", ["http://127.0.0.1:5173"]],
    },
});

io.on("connection", (socket) => {
    socket.on("sendQuestion", (questionString, codeString) => {
        reset();
        io.emit("recieveQuestion", questionString, codeString);
    });

    function reset() {
        (a = 0), (b = 0), (totalA = 0), (totalB = 0), (totalVotes = 0);
        io.emit("reset");
    }

    socket.on("reset", () => {
        reset();
        io.emit("reset");
    });

    socket.on("sendVote", (x) => {
        if (!x) {
            io.emit("recieveVote", 0, 0);
        }
        if (x === "a") {
            totalA += 1;
        } else if (x === "b") {
            totalB += 1;
        }
        totalVotes += 1;
        io.emit("recieveVote", totalA, totalB);
    });
});
