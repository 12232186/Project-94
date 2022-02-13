
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdEUdkNRgGGMuPLoAa296_i6vbytE4iMk",
    authDomain: "project-93-ec9fe.firebaseapp.com",
    projectId: "project-93-ec9fe",
    storageBucket: "project-93-ec9fe.appspot.com",
    messagingSenderId: "956033024189",
    appId: "1:956033024189:web:f9d798b6f58053870777d4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
function logout(){
  window.location = "index.html";
}