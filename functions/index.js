const functions = require("firebase-functions");
const axios = require("axios");

exports.createChatEngineUser = functions.auth.user().onCreate((user) => {
  axios.post(
      "https://api.chatengine.io/users/",
      {
        username: user.email,
        secret: user.uid,
        email: user.email,
        first_name: user.displayName,
      },
      {headers: {"Private-Key": "888bd1be-de0d-48a3-a4da-6aa0a5cdb41f"}});
});

exports.deleteChatEngineUser = functions.auth.user().onDelete((user) => {
  axios.delete("https://api.chatengine.io/users/me/", {
    headers: {
      "Project-ID": "b4eb96a0-2848-4c1c-a12f-498d08d1478f",
      "User-Name": user.email,
      "User-Secret": user.uid,
    },
  });
});
