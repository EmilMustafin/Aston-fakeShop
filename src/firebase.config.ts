import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAtCmTmKKWg9j8AmOXba3ugHkdlTcfSSZ4',
  authDomain: 'fake-store-aston.firebaseapp.com',
  projectId: 'fake-store-aston',
  storageBucket: 'fake-store-aston.appspot.com',
  messagingSenderId: '288063949527',
  appId: '1:288063949527:web:58a68cfbd355a2af1bbe92',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
