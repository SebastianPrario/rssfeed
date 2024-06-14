import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: 'AIzaSyCM-wPrJYzUTGL3TkzW1txbF86eCeBLVJ4',
  authDomain: 'rss-feed-6e294.firebaseapp.com',
  projectId: 'rss-feed-6e294',
  storageBucket: 'rss-feed-6e294.appspot.com',
  messagingSenderId: '174226069939',
  appId: '1:174226069939:web:36b3bfa367ae6fb7ec13c6'

}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
// Initialize Cloud Firestore and get a reference to the service
