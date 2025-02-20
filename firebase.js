import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCaSKbbIjcXoCgT1JfCaIvlcT-A1wk9j5w",
  authDomain: "fitness-bb121.firebaseapp.com",
  projectId: "fitness-bb121",
  storageBucket: "fitness-bb121.firebasestorage.app",
  messagingSenderId: "309968780426",
  appId: "1:309968780426:web:623321cd72b2c7a8dbc173",
  measurementId: "G-TYV5S7FSX6"
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app) // Pass app instance
const storage = getStorage(app) // Pass app instance

export { app, db, storage }
