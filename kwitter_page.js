//YOUR FIREBASE LINKS
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
     roomName = localStorage.getItem("roomName");

     function send() {

           userINPUT = document.getElementById("msg").value;
           firebase.database().ref(roomName).push({

            name:username,
            message:userINPUT,
            like : 0

           });
           
           document.getElementById("msg").value=" ";

     }

function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-primary' id="+firebase_message_id+"value="+like+"onclick='like_update(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> Like : "+like+"</span> </button> <hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

function logout() {
      window.location="index.html";
      localStorage.removeItem("roomName");
      localStorage.removeItem("username");
    }

    function like_update(message_id) {

          button_id = message_id;
          like=document.getElementById(button_id).value;
          like_updated=Number(like)+1;
          firebase.database().ref(room_name).child(message_id).update({
like : like_updated
          });
      
    }