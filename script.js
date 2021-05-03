var modal = document.getElementById('popWindow');
var button = document.getElementById('joinButton');
var close = document.getElementsByClassName('close')[0];

function goFriendly(){
  window.location.href = "friendly.html";

}

button.onclick = function(){
  popWindow.style.display = "block";
}

close.onclick = function(){
  popWindow.style.display = "none";
}
