import { app } from '../services/FirebaseConnect'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const auth = getAuth(app);

export default function login(email, password) {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                resolve(user)
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })

}
