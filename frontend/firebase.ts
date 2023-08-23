import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVEYwFDOjfV6TNQkCCt5FHjAwxTqHKCOI",
    authDomain: "fir-chat-bccl.firebaseapp.com",
    projectId: "firebase-chat-bccl",
    storageBucket: "firebase-chat-bccl.appspot.com",
    messagingSenderId: "203414567099",
    appId: "1:203414567099:web:92f38fd35c3b0ffc54919e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);