var user;

firebase.initializeApp({  
    apiKey: 'AIzaSyDR-dqNI65wzO3sMadtDX_AG74AGaCrgFI',  
    authDomain: 'cse135-hw4-5666d.firebaseapp.com',  
    projectId: 'cse135-hw4-5666d'
});
document.getElementById("loginButton").onclick = function() {
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
    window.location = './dashboard.html'; //After successful login, user will be redirected to home.html
  }
});
