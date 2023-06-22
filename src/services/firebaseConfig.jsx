// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    orderBy,
    writeBatch,
} from "firebase/firestore";
import ciudades from "../data/Ciudades"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbY_qMC2sFRU3eGEWpN0QJyeJcAk60X_8",
    authDomain: "react-pf-diegomuro2023.firebaseapp.com",
    projectId: "react-pf-diegomuro2023",
    storageBucket: "react-pf-diegomuro2023.appspot.com",
    messagingSenderId: "199639435986",
    appId: "1:199639435986:web:9c4988142be7d61cfb7b0b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Conectarnos a Firestore
const db = getFirestore(firebaseApp);


/* Promise disfrazada de function - El nombre tiene que ser el mismo de FIRESTORE*/
export async function getCiudades() {
    const productsCollectionRef = collection(db, "ciudades");

    /* const q = query(productsCollectionRef, orderBy("index")); */

    const productsSnapshot = await getDocs(productsCollectionRef  /* q */);
    const arrayDocs = productsSnapshot.docs;

    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });
    return dataDocs;
}


/* Promise disfrazada de function */
export async function getCiudadById(idUrl) {
    const docRef = doc(db, "ciudades", idUrl);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
}


// ver si cambiar "idCategory" por "continenteId"
export async function getCiudadesByContinent(continenteId) {
    /* const q = query(collection(db, "cities"), where("capital", "==", true)); */
    const productsCollectionRef = collection(db, "ciudades");
    const q = query(productsCollectionRef, where("continente", "==", continenteId));
    const productsSnapshot = await getDocs(q);
    const arrayDocs = productsSnapshot.docs;
    const dataDocs = arrayDocs.map((doc) => {
        return { ...doc.data(), id: doc.id };
    });

    return dataDocs;
}

/*--------------------------------------------------------------------------------- */
export async function createOrder(data) {
    const ordersCollectionRef = collection(db, "orders");

    const response = await addDoc(ordersCollectionRef, data);
    return response.id;

    /*  addDoc(ordersCollectionRef, data).then((respuesta) => {
      console.log(respuesta);
      console.log("Orden creada", respuesta.id);
    }); */
}

export async function createOrderWithStockUpdate(data) {
    const ordersCollectionRef = collection(db, "orders");
    const batch = writeBatch(db);
    const { items } = data;

    for (let itemInCart of items) {
        const refDoc = doc(db, "ciudades", itemInCart.id);
        const docSnap = await getDoc(refDoc);

        const { stock } = docSnap.data();
        console.log(stock);

        const stockToUpdate = stock - itemInCart.count;
        if (stockToUpdate < 0) {
            throw new Error(`No hay stock suficiente del producto: ${itemInCart.id}`);
        } else {
            const docRef = doc(db, "ciudades", itemInCart.id);
            batch.update(docRef, { stock: stockToUpdate });
        }
    }

    await batch.commit();
    const response = await addDoc(ordersCollectionRef, data);

    return response.id;
}

export async function exportDataWithBatch() {
    const batch = writeBatch(db);

    const collectionRef = collection(db, "ciudades");

    for (let item of ciudades) {
        item.index = item.id;
        delete item.id;

        const docRef = doc(collectionRef);
        batch.set(docRef, item);
    }

    await batch.commit();
    console.log("Items Exportados");
}
