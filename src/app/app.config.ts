import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA22yRcK2GBPK_E6uvBHfj0IreEViofM2k",
  authDomain: "app-test-ef0df.firebaseapp.com",
  projectId: "app-test-ef0df",
  storageBucket: "app-test-ef0df.appspot.com",
  messagingSenderId: "478872230022",
  appId: "1:478872230022:web:bcb14340b80e2d76ca1907"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};