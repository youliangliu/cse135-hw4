var pageName = 'index';


//Handles loading the page names
function loadHandler(){
    if(document.title == "Youliang Liu's Introduction page"){
        pageName = "index";
        //storeData(pageName);
    }
    if(document.title == "Youliang Liu's Images page"){
        pageName = "image"
        //storeData("image");
    }
    if(document.title == "Youliang Liu's Form page"){
        pageName = "form";
        //storeData("form");
    }
    if(document.title == "Youliang Liu's externals page"){
        pageName = "externals";
        //storeData("externals");
    }
    if(document.title == "Youliang Liu's table and list page"){
        pageName = "tables";
        //storeData("tables");
    }
    if(document.title == "Youliang Liu's Report page"){
        pageName = "report";
        //storeData("report");
    }
    requestId();
}


//Calls assignSessionId endpoint to request a random string id
function requestId(){
    //var data = localStorage.getItem(pageName);
    var request = new XMLHttpRequest();
    var url = 'https://us-central1-cse135-hw4-5666d.cloudfunctions.net/assignSessionId';
    request.open('POST', url, false);

    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //When response is ready grab the id in response
            document.cookie = request.responseText;
        }
    };
    request.send('request');
}


//Adds an id to a JSON entry object
function addId(){
    var data = localStorage.getItem(pageName);
    var json = JSON.parse(data);
    json.id = document.cookie.split('=')[1];
    localStorage.setItem(pageName, JSON.stringify(json));
}


//Sends an entry object to updateData endpoint 
function sendData(){
    var request = new XMLHttpRequest();
    var url = 'https://us-central1-cse135-hw4-5666d.cloudfunctions.net/updateData';
    request.open('POST', url, true);
    addId();
    var data = localStorage.getItem(pageName);
    request.send(data);
}


//Execution starts here
window.addEventListener('DOMContentLoaded',  loadHandler);
window.addEventListener('beforeunload', sendData);
