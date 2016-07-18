# Readme
a login form plugin made with vanila javascript

my firts attempt in creating javascript plugin

it doesn't take care of your actual log in yet, for the moment it just show up the form

# How to use
1. link the js and css file to your website
2. create an element with id "login_trigger_button"
3. add the following script to your page header
  window.onload = function () {
    var triggerButton = document.getElementById('login_trigger_button');
    var myLogin = new Login();
    triggerButton.addEventListener('click', function() {
    myLogin.open();
    });
  };

#Options
you can change the accent color and login text of the form
  var myLogin = new Login({accentColor: "1ca8dd", loginTitle: "hello there!!", loginTextButton: "come on in"});
