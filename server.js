// creating first server using express js
// importing express package
const express = require("express");
// creating express object
const app = express();
// starting express server
app.listen(4000, function () {
  console.log("ec-server is running on port no 4000");
});
