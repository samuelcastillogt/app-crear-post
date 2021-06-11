var textarea = document.getElementById('cuerpo');
sceditor.create(textarea, {
	format: 'xhtml',
	style: 'https://cdn.jsdelivr.net/npm/sceditor@3/minified/themes/content/default.min.css'
});
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
  document.getElementById("guardar").addEventListener("click", ()=>{
    var instance = sceditor.instance(textarea);
const imagen = document.getElementById("titulo").value
;
      const titulo = document.getElementById("titulo").value
      const desc = sceditor.instance(textarea).val();
      const slug = document.getElementById("slug").value
      const metadesc = document.getElementById("metadesc").value
      const img = document.getElementById("img").value
      const audio = document.getElementById("audio").value
      
      
    var db = firebase.firestore();
    db.collection("podcast").doc(slug).set({
   titulo : titulo,
   desc: desc,
   metadesc: metadesc,
   img: img,
   slug: slug, 
   audio: audio
})
.then((docRef) => {
    document.getElementById("este").innerHTML =`<h2>Entrada creada con exito</h2>`
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
console.log(cuerpo)
  })
  const imagen= document.getElementById('file')
  const imagen2= document.getElementById('file2')
imagen.addEventListener('change', function(evento){
    evento.preventDefault();
   
    var archivo  = evento.target.files[0];
   
    subirArchivo(archivo);
   });
   imagen2.addEventListener('change', function(evento){
    evento.preventDefault();
   
    var archivo  = evento.target.files[0];
   
    subirArchivo2(archivo);
   });
function subirArchivo(archivo) {
    const storageService= firebase.storage();
    const ruta = storageService.ref('podcast').child(archivo.name);
    var uploadTask = ruta.put(archivo);
    uploadTask.on('state_changed', function(snapshot){
       // Observe state change events such as progress, pause, and resume
       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       document.getElementById("previa").innerHTML=`<p class="h2">Subida: ${progress.toFixed(2)}%`
       switch (snapshot.state) {
         case firebase.storage.TaskState.PAUSED: // or 'paused'
           console.log('Upload is paused');
           break;
         case firebase.storage.TaskState.RUNNING: // or 'running'
           console.log('Upload is running');
           break;
       }
     }, function(error) {
       // Handle unsuccessful uploads
     }, function() {
       // Handle successful uploads on complete
       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
         console.log('File available at', downloadURL);
         document.getElementById("audio").value =downloadURL
        //  document.getElementById("previa").innerHTML=`<img class="img-previa" img-previa src="${downloadURL}">`
        //  document.getElementById("imagen").value = downloadURL
       });
     });
    }

    function subirArchivo2(archivo) {
    const storageService= firebase.storage();
    const ruta = storageService.ref('podcast').child(archivo.name);
    var uploadTask = ruta.put(archivo);
    uploadTask.on('state_changed', function(snapshot){
       // Observe state change events such as progress, pause, and resume
       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       document.getElementById("previa2").innerHTML=`<p class="h2">Subida: ${progress.toFixed(2)}%`
       switch (snapshot.state) {
         case firebase.storage.TaskState.PAUSED: // or 'paused'
           console.log('Upload is paused');
           break;
         case firebase.storage.TaskState.RUNNING: // or 'running'
           console.log('Upload is running');
           break;
       }
     }, function(error) {
       // Handle unsuccessful uploads
     }, function() {
       // Handle successful uploads on complete
       // For instance, get the download URL: https://firebasestorage.googleapis.com/...
       uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
         console.log('File available at', downloadURL);
         imagen2.classList.add("hidden")
         
        document.getElementById("previa2").innerHTML=`<img class="img-previa" img-previa src="${downloadURL}">`
          document.getElementById("img").value = downloadURL
       });
     });
    }