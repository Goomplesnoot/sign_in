(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCueZCE_b4GuTw3aTrKTvH0S5JfergL4zw",
        authDomain: "project-6de97.firebaseapp.com",
        projectId: "project-6de97",
        storageBucket: "project-6de97.appspot.com",
        messagingSenderId: "1061502646522",
    };
    firebase.initializeApp(config);
    
    var userDataRef = firebase.database().ref("UserData").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();              

  var name_val = childSnapshot.val().Name;
  var email_val = childSnapshot.val().email;

  $("#name").append(name_val);
  $("#email").append(email_val);

  });
});
    }());