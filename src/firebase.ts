import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4eTF0gFvFyF6-Wz1cYxaAIicPSpQV9jY",
  authDomain: "telalogin-e9d3d.firebaseapp.com",
  projectId: "telalogin-e9d3d",
  storageBucket: "telalogin-e9d3d.appspot.com",
  messagingSenderId: "503045581061",
  appId: "1:503045581061:web:7ab49b9bee1bb2dd7aaf6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function SignOut() {
  signOut(auth).then(() => {
    window.location.href = "/";
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
  } else {
    // window.location.href = "/";
  }
});
