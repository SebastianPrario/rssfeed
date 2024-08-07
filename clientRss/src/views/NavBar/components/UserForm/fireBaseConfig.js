import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const fireBaseConfig = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCM-wPrJYzUTGL3TkzW1txbF86eCeBLVJ4',
    authDomain: 'rss-feed-6e294.firebaseapp.com',
    projectId: 'rss-feed-6e294',
    storageBucket: 'rss-feed-6e294.appspot.com',
    messagingSenderId: '174226069939',
    appId: '1:174226069939:web:36b3bfa367ae6fb7ec13c6'
  }
  const appFireBase = initializeApp(firebaseConfig)
  const auth = getAuth(appFireBase)
  auth.languageCode = 'es'
  return auth
}
