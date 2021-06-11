
var firebaseConfig = {
    apiKey: "AIzaSyDSSeuU8iHnoN3ucTzTFhfn6GylKIqasL0",
    authDomain: "escuela-32bef.firebaseapp.com",
    databaseURL: "https://escuela-32bef.firebaseio.com",
    projectId: "escuela-32bef",
    storageBucket: "escuela-32bef.appspot.com",
    messagingSenderId: "913904034443",
    appId: "1:913904034443:web:822c99f3fdd229fddbea8e",
    measurementId: "G-K2VS202KHJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  db.collection("blog")
    .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data().slug)
            const datos = doc.data()
            const id= datos.slug
                document.getElementById("este").innerHTML+= `
                <p>${datos.titulo}</p>
                <button id="${id}">Borrar</button>
                `
                const click = document.getElementById(id)
                click.addEventListener("click", ()=>{
                if (document.getElementById(id)){ 
                    console.log("hola")

                }
            })
    });
    })
    