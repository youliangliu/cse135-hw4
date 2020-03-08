firebase.initializeApp({  
    apiKey: 'AIzaSyDR-dqNI65wzO3sMadtDX_AG74AGaCrgFI',  
    authDomain: 'cse135-hw4-5666d.firebaseapp.com',  
    projectId: 'cse135-hw4-5666d'
});

firebase.auth().signOut().then(function() {
    window.location = './index.html';
    }).catch(function(error) {
    // An error happened.
});