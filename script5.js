
let outputDetail = document.getElementById("detail");

let userDetailData = [
  {
    "profile_image": "images/up2.jpeg",
    "user_name": "extramud",
    "user_age": 22,
    "user_status": "Hey, I’ll be back in five minutes. If I’m not, just read this message again.",
    "user_hobby": "Photography, Graphic Design, Being with cats"
  },
  {
  "profile_image": "images/up3.jpeg",
  "user_name": "arrayus",
  "user_age": "20+",
  "user_status": "My job is secure. No one else wants it.",
  "user_hobby": "binge watching on YTB & Netflix"
},
  {
    "profile_image": "images/up8.jpeg",
    "user_name": "premiumeffort",
    "user_age": 18,
    "user_status": "I’m not special. I’m a limited edition.",
    "user_hobby": "LOL and alternative music"
  },
  {
    "profile_image": "images/up10.jpeg",
    "user_name": "decemberexists",
    "user_age": 20,
    "user_status": "Someday you’ll go far, and I hope you stay there.",
    "user_hobby": "books and boba"
  },
  {
    "profile_image": "images/up9.jpeg",
    "user_name": "singlebeer",
    "user_age": 25,
    "user_status": "You’re so lucky that I’m terrified of prison.",
    "user_hobby": "coffee"
  }

];
createDetail(userDetailData[0]);

function createDetail (selectedJson){
  let newDetail = document.createElement("DIV");
  newDetail.classList.add("newUserDetail");

  let userProfile = document.createElement("IMG");
  userProfile.classList.add("newUserProfile");
  userProfile.src = selectedJson['profile_image'];
  newDetail.appendChild(userProfile);

  let userInfo = document.createElement("DIV");
  userInfo.classList.add("userInfo");
  newDetail.appendChild(userInfo);

  let userName = document.createElement("P");
  userName.classList.add("userName");
  userName.innerText = selectedJson['user_name'];
  userInfo.appendChild(userName);

  let userAge = document.createElement("P");
  userAge.classList.add("userAge");
  userAge.innerText = selectedJson['user_age'];
  userInfo.appendChild(userAge);

  let userStatus = document.createElement("P");
  userStatus.classList.add("userStatus");
  userStatus.innerText = selectedJson['user_status'];
  userInfo.appendChild(userStatus);

  let userHobby = document.createElement("P");
  userHobby.classList.add("userHobby");
  userHobby.innerText = selectedJson['user_hobby'];
  userInfo.appendChild(userHobby);

  let moreButton = document.createElement("BUTTON");
  moreButton.classList.add("moreButton");
  moreButton.innerHTML = "See More"
  userInfo.appendChild(moreButton);
  moreButton.addEventListener("click", function(){
    if (window.confirm("Sorry, you'll need more connections to unlock more about this user. \nGo back to add more connections?")){
      window.location.href = "page2_1.html"
    }else{
      window.location.href = "thank_you.html"

    };

  });
  outputDetail.appendChild(newDetail);
}
