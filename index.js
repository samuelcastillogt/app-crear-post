
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
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
   db.collection("blog")
  .get()
  .then((querySnapshot) => {
     querySnapshot.forEach((doc) => {
         const post= doc.data()
         const id= doc.id
         console.log(id)
         document.getElementById("containerBlog").innerHTML+=`
         <div class="card" id="${id}">
             <img class="cardImg" src="${post.imgDes}">
             <h2 class="cardTitle">${post.titulo}</h2>
             <button class="btn" onclick="myFunction()">Editar</button>
             <span class="btn" id="borrar">Borrar</span>
             </div>
             `   
             function myFunction() {
                console.log("hola como estas")
              }
            })
          
         })
     
        