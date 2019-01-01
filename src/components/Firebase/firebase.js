import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAJGVOH0Q7qBKHP1HjgtcW9CGdzy6KQV5c",
    authDomain: "phrasely-12418.firebaseapp.com",
    databaseURL: "https://phrasely-12418.firebaseio.com",
    projectId: "phrasely-12418",
    storageBucket: "phrasely-12418.appspot.com",
    messagingSenderId: "1009285101089"
}

class Firebase {
    constructor(){
        app.initializeApp(config);

        this.auth = app.auth();
    }
    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;