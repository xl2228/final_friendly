let outputFeed = document.getElementById('feed');

let userDatabase = [

  {
    "profile_image": "images/up1.jpeg",
    "user_name": "catwills",
    "user_age": "Unknown",
    "user_status": "There are many things of which a wise man might wish to be ignorant."
  },
  {
    "profile_image": "images/up2.jpeg",
    "user_name": "extramud",
    "user_age": 22,
    "user_status": "Hey, I’ll be back in five minutes. If I’m not, just read this message again."
  },
  {
  "profile_image": "images/up3.jpeg",
  "user_name": "arrayus",
  "user_age": "20+",
  "user_status": "My job is secure. No one else wants it."
},
{
  "profile_image": "images/up4.jpeg",
  "user_name": "raftingseek",
  "user_age": 17,
  "user_status": "Sleep is my drug… my bed is my dealer and my alarm clock is the police."
},
{
  "profile_image": "images/up5.jpeg",
  "user_name": "falsepush",
  "user_age": 19,
  "user_status": "Take my advice, I don’t use it anyway."
},
{
  "profile_image": "images/up6.jpeg",
  "user_name": "slowrye",
  "user_age": 27,
  "user_status": "I never argue, I just explain why I’m right."
},
{
  "profile_image": "images/up7.jpeg",
  "user_name": "breakfastskirl",
  "user_age": "N/A",
  "user_status": "I’m naturally funny because my whole life is a joke."
},
{
  "profile_image": "images/up8.jpeg",
  "user_name": "premiumeffort",
  "user_age": 18,
  "user_status": "I’m not special. I’m a limited edition."
},
{
  "profile_image": "images/up9.jpeg",
  "user_name": "singlebeer",
  "user_age": 25,
  "user_status": "You’re so lucky that I’m terrified of prison."
},
{
  "profile_image": "images/up10.jpeg",
  "user_name": "decemberexists",
  "user_age": 20,
  "user_status": "Someday you’ll go far, and I hope you stay there."
},
{
  "profile_image": "images/up11.jpeg",
  "user_name": "merveilleoffbeat",
  "user_age": 19,
  "user_status": "I’m so tired, my tired is tired."
},
{
  "profile_image": "images/up12.jpeg",
  "user_name": "fileward",
  "user_age": "Unknown",
  "user_status": "Born to express not to impress."
},
{
  "profile_image": "images/up13.jpeg",
  "user_name": "spillsurvive",
  "user_age": 24,
  "user_status": "Be yourself, who else is better qualified?"
},
{
  "profile_image": "images/up14.jpeg",
  "user_name": "alreadystood",
  "user_age": 22,
  "user_status": "For all the people who make me laugh – thank you."
},
{
  "profile_image": "images/up15.jpeg",
  "user_name": "cherrygrease",
  "user_age": 21,
  "user_status": "The world could be amazing when you are slightly strange."
}

];

var Num_Values = 4;
var startPoint = Math.floor(Math.random() * userDatabase.length); /* later replaced by a random number */

for (var i = startPoint, j = 0; j < Num_Values; j++, i = (i+1) % userDatabase.length) {
  createFeed(userDatabase[i]);

}

function createFeed (userJson){
  let newFeed = document.createElement("DIV");
  newFeed.classList.add('newFeed');

  let userProfile = document.createElement("IMG");
  userProfile.classList.add("userProfile");
  userProfile.src = userJson['profile_image'];
  newFeed.appendChild(userProfile);

  let userInfo = document.createElement("DIV");
  userInfo.classList.add("userInfo");
  newFeed.appendChild(userInfo);

  let userName = document.createElement("P");
  userName.classList.add("userName");
  userName.innerText = userJson['user_name'];
  userInfo.appendChild(userName);

  let userAge = document.createElement("P");
  userAge.classList.add("userAge");
  userAge.innerText = userJson['user_age'];
  userInfo.appendChild(userAge);

  let userStatus = document.createElement("P");
  userStatus.classList.add("userStatus");
  userStatus.innerText = userJson['user_status'];
  userInfo.appendChild(userStatus);

  outputFeed.appendChild(newFeed);
}
