function login() {
username = document.getElementById("inputLOGIN").value;
localStorage.setItem("username", username);
window.location="kwitter_room.html";
}