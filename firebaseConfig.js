import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCJrykgcMQtp__p5sUBWYuSaTwWTWKc8tU",
  authDomain: "diwali-fb070.firebaseapp.com",
  projectId: "diwali-fb070",
  storageBucket: "diwali-fb070.appspot.com",
  messagingSenderId: "1090115636216",
  appId: "1:1090115636216:web:79e810deee5ed2475ce40d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const userNameTag = document.getElementById("name").innerText;
const viewCount = document.getElementById("viewCount");
const usersCollection = collection(db, "user");

addDoc(usersCollection, {
  name: userNameTag,
})
  .then((docRef) => {
    console.log("Thank you");
  })
  .catch((error) => {
    console.error("Sorry");
  });

const getUsersCount = async () => {
  const querySnapshot = await getDocs(usersCollection);
  const count = querySnapshot.size;
  viewCount.innerHTML = count;
};

getUsersCount().catch((error) => {
  console.log("Error getting document count: ", error);
});
