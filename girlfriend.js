setInterval( function() { movePic() }, 200);

function movePic() {
 setTimeout( function() { document.getElementById('body').style = "background: url('https://darkheart527.github.io/domain-storage/Heart.png') repeat fixed"}, 100);
 setTimeout( function() { document.getElementById('body').style = "background: url('https://darkheart527.github.io/domain-storage/Heart2.png') repeat fixed"}, 200);
}

function checkPerms() {
 if (globalCode == 2639301) {
  document.getElementById('loadVideo').src = "https://darkheart527.github.io/domain-storage/XiaoYing - James.mp4";
 } else {
  document.getElementById('gCArea').style.visibility = true;
  alert('Your Gc is incorrect');
 }
}
