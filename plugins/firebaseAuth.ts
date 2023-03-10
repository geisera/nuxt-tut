import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {

    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: "grimnomicon.firebaseapp.com",
        projectId: "grimnomicon",
        storageBucket: "grimnomicon.appspot.com",
        messagingSenderId: "896178523475",
        appId: "1:896178523475:web:985150f19f0f22f806e5a6",
        measurementId: "G-WLLJJ6WFJZ"
    };

      //Initialize app
    const app = initializeApp(firebaseConfig);
    
    initializeUser();
    
    const auth = getAuth();

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);

})

