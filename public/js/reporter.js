var pageName = "index";
var startTime;
var endTime;
var idleTime;


function loadHandler(){
    if(document.title == "Youliang Liu's Introduction page"){
        pageName = "index";
        storeData(pageName);
    }
    if(document.title == "Youliang Liu's Images page"){
        pageName = "image"
        storeData("image");
    }
    if(document.title == "Youliang Liu's Form page"){
        pageName = "form";
        storeData("form");
    }
    if(document.title == "Youliang Liu's externals page"){
        pageName = "externals";
        storeData("externals");
    }
    if(document.title == "Youliang Liu's table and list page"){
        pageName = "tables";
        storeData("tables");
    }
    if(document.title == "Youliang Liu's Report page"){
        pageName = "report";
        storeData("report");
    }
}


function performClick(pageName){
    var data = localStorage.getItem(pageName);
    let json = JSON.parse(data);
    var clickNum = parseInt(json.click) + parseInt("1");
    json.click = clickNum;
    localStorage.setItem(pageName, JSON.stringify(json));
}

function keyStroke(pageName, key){
    var data = localStorage.getItem(pageName);
    let json = JSON.parse(data);
    json.keyStroke = json.keyStroke + key + " ";
    localStorage.setItem(pageName, JSON.stringify(json));
}

function Entry(){
    var imageCollection = document.images;
    var imageFlag = false;
    if (imageCollection.length > 0){
        imageFlag = true;
    }
    
    var css = document.styleSheets;
    var cssFlag = false;
    if(css.length > 0){
        cssFlag = true;
    }
    
    var script = document.scripts;
    var scriptFlag = false;
    if (script.length > 0){
        scriptFlag = true;
    }

    var start = performance.timing.navigationStart;
    var end = performance.timing.responseEnd;
    var timeTakenValue = end - start;
    var today = new Date();
    var currentHour = today.getHours();

    this.userAgent = navigator.userAgent;
    this.userLanguage = navigator.language;
    this.cookie = navigator.cookieEnabled;
    this.javascript = scriptFlag;
    this.screenWidth = screen.width;
    this.screenHeight = screen.height;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.connectionType = navigator.connection.effectiveType;
    this.image = imageFlag;
    this.css = cssFlag;
    this.loadingStart = performance.timing.navigationStart;
    this.loadingEnd = performance.timing.responseEnd;
    this.timeTaken = timeTakenValue;
    this.click = 0;
    this.keyStroke = "";
    this.scroll = "";
    this.mouseMovement = "";
    this.unloadTimes = 0;
    this.id = "";
    this.hour = currentHour;
}

function storeData(pageName){
    entry = new Entry();
    let json = JSON.stringify(entry);
    localStorage.setItem(pageName, json);

}

function recordScroll(pageName, scroll){
    var data = localStorage.getItem(pageName);
    let json = JSON.parse(data);
    json.scroll = json.scroll + scroll + " ";
    localStorage.setItem(pageName, JSON.stringify(json));
}

function mouseMovement(pageName, x, y){
    var data = localStorage.getItem(pageName);
    let json = JSON.parse(data);
    json.mouseMovement = json.mouseMovement + "x: " + x + "y: " + y + " ";
    localStorage.setItem(pageName, JSON.stringify(json));
}


function unLoad(pageName){
    var data = localStorage.getItem(pageName);
    let json = JSON.parse(data);
    var temp = parseInt(json.unloadTimes) + parseInt("1");
    json.unloadTimes = temp;
    localStorage.setItem(pageName, JSON.stringify(json));
}


function resetIdleTime(){
    idleTime = 0;
}



window.addEventListener('DOMContentLoaded',  loadHandler);
window.onclick = function(){performClick(pageName)};

window.addEventListener('keydown', event => {
    var key = event.key;
    keyStroke(pageName, key);
});

window.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    recordScroll(pageName, scroll);
});

window.addEventListener('mousemove', event => {
    var x = event.clientX;
    var y = event.clientY;
    mouseMovement(pageName, x, y);
  });

  window.onbeforeunload = function(){
    unLoad(pageName);
    return 'Are you sure you want to leave?';
  };

function testCookie() {
    var test = document.cookie;
    console.log(test);
}

testCookie();
