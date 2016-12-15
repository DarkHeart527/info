var carryOutGC;
var checkGC;
onLoaded();

function onLoaded() {
 if (localStorage.New == 1) {
  checkGC = localStorage.getItem("login");
  setTimeout( function() { askForPermNoAsk() }, 250);
  signedIn();
 }
}

function askForPerm() {
 if (localStorage.New == 1) {
  checkGC = localStorage.getItem("login");
  askForPermNoAsk();
 } else {
  var globalCode = prompt("Please Type In Your Seven Digit Global Code To Login... Ex: 1234567\n" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
  if (globalCode == "Guest") {
   localStorage.setItem("login", "guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   carryOutGC = globalCode;
   checkCode();
  }
 }
}

function signedIn() {
 document.getElementById('').style = '';
 document.getElementById('').style = '';
}

function askForPermNoAsk() {
 if (checkGC == "Guest") {
   localStorage.setItem("login", "Guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   checkCode()
  }
}

function checkCode() {
 localStorage.setItem("login", carryOutGC);
 checkGC = carryOutGC;
 if (checkGC == 4278928) {
  localStorage.permissionLevel = 10;
  checkPermission();
 } else {
  error();
 }
}

function error() {
 globalCode = prompt("Error: Invalid GC!!!\nPlease Type In Your Seven Digit Global Code To Login... Ex: 1234567\n" + 'If you don' + "'" + 't have a GC then type "Guest"',"");
 if (globalCode == "Guest") {
   localStorage.setItem("login", "Guest");
   localStorage.permissionLevel = 1;
   checkPermission();
  } else {
   carryOutGC = globalCode;
   checkCode();
  }
}

function checkPermission() {
 localStorage.savedGc = checkGC;
 if (localStorage.permissionLevel == 1) {
  if (document.getElementById('whatPage').value == 1) {
   setPageOne();
  }
 } else if (localStorage.permissionLevel == 10) {
  setPageTen();
 }
localStorage.New = 1;
}

function setPageOne() {
 if (document.getElementById('link3')) {
  document.getElementById('link3').remove()
 }
}

function setPageTen() {
 document.getElementById('3').href = "projects/Unnamed.html";
}
