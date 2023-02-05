import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
 } from "firebase/auth";

export const createUser = async ( email, password ) => {
    const auth = getAuth();
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
}

export const signInUser = async (email, password) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    return credentials;
}

export const initializeUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            //console.log('Auth changed: ', user);
        } else {
            //console.log('No auth change!');
        }

        firebaseUser.value = user;
    });
}
export const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    console.log('Result: ', result);
};