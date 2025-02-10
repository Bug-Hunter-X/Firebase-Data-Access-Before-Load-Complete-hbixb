The provided solution ensures data is fully loaded before access. Using `.data()` directly on the snapshot within the `onSnapshot` listener isn't ideal, as the data can be undefined during initial load.

```javascript
import { doc, onSnapshot, getDoc } from 'firebase/firestore';
// ...Firebase initialization...

const docRef = doc(db, 'yourCollection', 'yourDocId');

onSnapshot(docRef, (docSnapshot) => {
  if (docSnapshot.exists()) {
    console.log('Document data:', docSnapshot.data());
  } else {
    console.log('Document does not exist!');
  }
});

// Alternative using async/await for cleaner handling
async function getData(){
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
}
getData();
```