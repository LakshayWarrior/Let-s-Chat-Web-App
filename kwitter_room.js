var firebaseConfig = {
      apiKey: "AIzaSyAcpRfiChkZW9pKQeF96iKByB42j2qwU-g",
      authDomain: "let-s-chat-20f8c.firebaseapp.com",
      databaseURL: "https://let-s-chat-20f8c-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-20f8c",
      storageBucket: "let-s-chat-20f8c.appspot.com",
      messagingSenderId: "1006247370448",
      appId: "1:1006247370448:web:70fac2da2c38f47bb308d5"
    };
    

firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("Room names - " + room_name);
      row = "<div class='room_name' id="+room_name+" onclick='redirectToRoomnames(this.id)'>#"+room_name+"<div><hr>";
      document.getElementById("output").innerHTML+= row;;
      //End code
      });});}
getData();
function redirectToRoomnames(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function login(){
      localStorage.addItem("user_name");
}