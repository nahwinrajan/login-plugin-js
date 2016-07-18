# Readme
a login form plugin made with vanila javascript

my firts attempt in creating javascript plugin

it doesn't take care of your actual log in yet, for the moment it just show up the form

# How to use
link the js and css file to your website
create an element with id "login_trigger_button" and
add the following script to your page header
window.onload = function () {
  var triggerButton = document.getElementById('login_trigger_button');
  var myLogin = new Login();
  triggerButton.addEventListener('click', function() {
  myLogin.open();
  });
};
