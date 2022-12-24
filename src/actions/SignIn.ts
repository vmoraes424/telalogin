import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
// import { useEffect } from "react";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

let saiu: boolean = false;

export function SignIn() {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res);
      const nome: any = res.user.displayName;
      const email: any = res.user.email;
      const foto: any = res.user.photoURL;
      localStorage.setItem("nome", nome);
      localStorage.setItem("email", email);
      localStorage.setItem("foto", foto);
      window.location.href = "/dashboard";
    })
    .catch((err) => console.log(err));
}
