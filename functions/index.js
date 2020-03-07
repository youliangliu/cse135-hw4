//initialize
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


//Endpoint
//Assigns each user a string id
//Id is sent in response body
exports.assignSessionId = functions.https.onRequest((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cse135-hw4-5666d.firebaseapp.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    var db = admin.firestore();
    var id = makeid(10);
    var docRef = db.collection('Users').doc(id);
    docRef.set({
        userInfo : req.body
    });
    res.send("userID="+id);
});

//Endpoint
//Updates the corresponding database entry with new information
//New information is contained in request body
exports.updateData = functions.https.onRequest((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cse135-hw4-5666d.firebaseapp.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    var db = admin.firestore();
    var data = req.body;
    var json = JSON.parse(data);
    var docRef = db.collection('Users').doc(json.id);
    docRef.set({
        userAgent : json.userAgent,
        userLanguage : json.userLanguage,
        cookie : json.cookie,
        javascript : json.javascript,
        screenWidth : json.screenWidth,
        screenHeight : json.screenWidth,
        windowWidth : json.windowWidth,
        windowHeight : json.windowHeight,
        connectionType : json.connectionType,
        image : json.image,
        css : json.css,
        loadingStart : json.loadingStart,
        loadingEnd : json.loadingEnd,
        timeTaken : json.timeTaken,
        click : json.click,
        keyStroke : json.keyStroke,
        scroll : json.scroll,
        mouseMovement : json.mouseMovement,
        unloadTimes : json.unloadTimes,
        id : json.id
    });
    res.send("Success");
});

exports.updateAdminData = functions.https.onRequest((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cse135-hw4-5666d.firebaseapp.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    var db = admin.firestore();
    var data = req.body;
    var json = JSON.parse(data);
    var docRef = db.collection('Admins').doc(json.name);
    docRef.set({
        Email : json.email,
        verified: json.verified
    });
    res.send("Success");
});

exports.returnListOfAdmins = functions.https.onRequest((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cse135-hw4-5666d.firebaseapp.com');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    var db = admin.firestore();
    let adminRef = db.collection('Admins');
    let allAdmins = adminRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
})


//A function to generate a random string id
//source: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }




