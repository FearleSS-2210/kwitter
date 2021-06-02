
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDX_5k-0buZD0MLEnke0k0Td6Kt5E8cANo",
      authDomain: "idiotic-kurama.firebaseapp.com",
      databaseURL: "https://idiotic-kurama-default-rtdb.firebaseio.com",
      projectId: "idiotic-kurama",
      storageBucket: "idiotic-kurama.appspot.com",
      messagingSenderId: "271348089386",
      appId: "1:271348089386:web:c28e5640a7d003a9c4b953"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("username");

    document.getElementById("userName").innerHTML="Welcome "+username;


    function AddRoom(){
          roomName=document.getElementById("ROOMinput").value;
          firebase.database().ref("/").child(roomName).update({
                purpose:"addingRoomName"
          });
          localStorage.setItem("roomName", roomName);
          window.location="kurama_page.html";
    } 

    function logout() {
      window.location="index.html";
      localStorage.removeItem("roomName");
      localStorage.removeItem("username");
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name : "+Room_names);
      row = "<div class='Room_names' id="+Room_names+" onclick='redirect(this.id)' > #"+Room_names+"</div> </hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirect(name) {
      console.log(name);
      localStorage.setItem("Room Name", name);
      window.location="kurama_page.html";
}