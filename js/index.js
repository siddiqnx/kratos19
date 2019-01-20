// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
//Start: Smooth Scroll
function smoothScroll() {
  document.querySelector("#main").scrollIntoView({
    behavior: "smooth"
  });
}
//End: Smooth Scroll

function prezero(n) {
  return n > 9 ? "" + n : "0" + n;
}
var deadline = new Date("Feb 13, 2019 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var t = deadline - now;
  var days = prezero(Math.floor(t / (1000 * 60 * 60 * 24)));
  var hours = prezero(
    Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  var minutes = prezero(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = prezero(Math.floor((t % (1000 * 60)) / 1000));
  document.getElementById("countdown").innerHTML =
    '<span class="countdown_item"><span class="countdown_num">' +
    days +
    '</span><span class="countdown_unit"> Days </span></span>' +
    '<span class="countdown_item"><span class="countdown_num">' +
    hours +
    '</span><span class="countdown_unit"> Hours </span></span>' +
    '<span class="countdown_item"><span class="countdown_num">' +
    minutes +
    '</span><span class="countdown_unit"> Minutes </span></span>' +
    '<span class="countdown_item"><span class="countdown_num">' +
    seconds +
    '</span><span class="countdown_unit"> Seconds </span></span>';
  if (t < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Event Started!";
  }
}, 1000);

function checkVisible(elm) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener("scroll", function(e) {
  const heroLeft = document.querySelector("#hero_left .nav-toggle");
  const navRight = document.querySelector("#hero_right #right_nav");
  if (!checkVisible(heroLeft) || !checkVisible(navRight)) {
    document.getElementById("top_bar").style.transform = "translateY(0)";
  } else {
    document.getElementById("top_bar").style.transform = "translateY(-60px)";
  }
});

function toggleLoadingScreen() {
  document.getElementById('loading_screen').classList.toggle('disp_none');
  document.body.classList.remove('noscroll');
}

function clearInputFields() {
  document.getElementById("name").value = "";
  document.getElementById("college").value = "";
  document.getElementById("phno").value = "";
  document.getElementById("email").value = "";
  document.getElementById("name").focus();
}

document.getElementById("register_form").onsubmit = function handleRegisterUser(e) {
    e.preventDefault();
    toggleLoadingScreen();
    var phone = document.getElementById("phno").value;
    var email = document.getElementById("email").value; 
    if(Number.isNaN(Number(phone)) || phone.indexOf('e') >= 0 || phone.length >= 11 || phone.length < 10) {
      alert('Invalid phone number');
      clearInputFields();
      toggleLoadingScreen();
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, phone).catch(function(error) {
      var msg = error.message;
      if(msg === "The email address is badly formatted.") {
        alert('Invalid email');
      } else if(msg === "The email address is already in use by another account.") {
        alert('Already registered.');
      } else {
        alert('Something went wrong please try again');
      }
      clearInputFields();
      toggleLoadingScreen();
      return;
    })
}

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        var name = document.getElementById("name").value;
        var college = document.getElementById("college").value;
        var phone = document.getElementById("phno").value;
        var email = document.getElementById("email").value; 
        
        firebase.database().ref('users/' + user.uid).set({
            username: name,
            college: college,
            phone: phone,
            email: email,
        }, function(error) {
            if(error) {
              alert('Something went wrong please try again');
            } else {
              document.body.classList.toggle('noscroll');
              alert('You are successfully registered');
            }
            clearInputFields();
            toggleLoadingScreen();
        });
        firebase.auth().signOut();
    }
})