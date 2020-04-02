var user;

firebase.initializeApp({  
    apiKey: 'AIzaSyDR-dqNI65wzO3sMadtDX_AG74AGaCrgFI',  
    authDomain: 'cse135-hw4-5666d.firebaseapp.com',  
    projectId: 'cse135-hw4-5666d'
});
document.getElementById("loginBtn").onclick = function() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function(result) {
        // The signed-in user info.
        user = result.user;
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
};
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    var name = user.displayName;
    var email = user.email;
    var verified = user.emailVerified;
    if(email == 'xil536@ucsd.edu' || email == 'liuyouliang120@gmail.com' || email == 'cse135grader@gmail.com') {
      sendAdminData(name, email, verified);
      window.location = './dashboard.html'; //After successful login, user will be redirected to home.html
    }
    else {
      confirm("You are not authroized to view the database");
      window.location = './logout.html'; //After successful login, user will be redirected to home.html
    }
    //sendAdminData(name, email, verified);
    //window.location = './dashboard.html'; //After successful login, user will be redirected to home.html
  }
});

function sendAdminData(name, email, verified){
  var request = new XMLHttpRequest();
  var url = 'https://us-central1-cse135-hw4-5666d.cloudfunctions.net/updateAdminData';
  request.open('POST', url, true);
  var admin = new Admin(name, email, verified);
  var data = JSON.stringify(admin);
  request.send(data);
}

function Admin(name, email, verified) {
  this.name = name;
  this.email = email;
  this.verified = verified;
}