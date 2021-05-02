var config = {
    apiKey: "AIzaSyASiYne2CAT_pONCeHMiTRsLT3LV9wc6Zs",
    authDomain: "formweb-f8352.firebaseapp.com",
    projectId: "formweb-f8352",
    storageBucket: "formweb-f8352.appspot.com",
    messagingSenderId: "110091385473",
    appId: "1:110091385473:web:4ae7e27e3f4a70fb86ab80",
    measurementId: "G-DFK8X1GNS4"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  //refernce msgs collection
var messageRef = firebase.database().ref('messages');
//listen form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name, company, email, phone, message);

    // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}


function getInputVal(id){
    return document.getElementById(id).value;
}

//save msgs
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        company: company,
        phone: phone,
        message: message
    });
}