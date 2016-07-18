(function() {
  //constants
  var USERNAME_TXT_ID = "username_txt";
  var PASSWORD_TXT_ID = "password_txt";
  var REMEMBERME_CHECKBOX_ID = "rememberMe_input";
  var ERR_MESSAGE_TXT = "message_login";

  //constructor
  this.Login = function() {
    // global element reference
    this.modal = null;
    this.overlay = null;
    this.closeButton = null;
    this.loginButton = null;
    this.usernameInput = null;
    this.passwordInput = null;
    this.rememberMeCheckbox = null;
    this.errMessage = null;

    //  get proper transitionend prefix
     this.transitionEnd = transitionSelect();

    // default options
    var defaults = {
      accentColor: "#EF3B3A",
      loginTitle: "Login",
      loginTextButton: "Login"
    };

    //  if user set different options value use it
    //  the parameter must be an object
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }
    else this.options = extendDefaults(defaults, {});
  };

  //public
  Login.prototype.open = function () {
    constructLoginForm.call(this);
    initializeEvents.call(this);
    //  force browser to recognize our initial state

    // remove the "open" class name
    this.modal.className = this.modal.className.replace(" nraj-vanquish", "");
    this.overlay.className = this.overlay.className.replace(" nraj-vanquish", "");
  };
  Login.prototype.close = function () {
    // hide and then remove
    this.modal.className += " nraj-vanquish";
    this.overlay.className += " nraj-vanquish";

    this.modal.parentNode.removeChild(this.modal);
    if(this.overlay.parentNode) this.overlay.parentNode.removeChild(this.overlay);
  };

  //private
  function constructLoginForm() {
    var doc_fragment;

    // we'll append our plugin to document fragment instead of dom
    doc_fragment = document.createDocumentFragment();

    // //setup - modal
    this.modal = document.createElement("div");
    this.modal.className = "nraj-modal nraj-vanquish";

    // setup - overlay
    this.overlay = document.createElement("div");
    this.overlay.className = "nraj-overlay";
    //setup - form
    var loginForm = document.createElement("form");
    loginForm.className = "nraj-login-form nraj-text-center";

    //setup - form - legend
    var legendForm = document.createElement("legend");
    legendForm.className = "nraj-legend-login-form nraj-text-center";
    var h2Legend = document.createElement("h2");

    //setup - form - input
    //setup - form - input - username
    this.usernameInput = document.createElement("input");
    this.usernameInput.type = "text";
    this.usernameInput.id = USERNAME_TXT_ID;
    this.usernameInput.className = "nraj-input-login";
    this.usernameInput.required = true;
    this.usernameInput.placeholder = "username";
    //setup - form - input - password
    this.passwordInput = document.createElement("input");
    this.passwordInput.type = "password";
    this.passwordInput.id = PASSWORD_TXT_ID;
    this.passwordInput.className = "nraj-input-login";
    this.passwordInput.required = true;
    this.passwordInput.placeholder = "password";
    //setup - form - input - checkbox
    var checkboxDiv = document.createElement("div");
    this.rememberMeCheckbox = document.createElement("input");
    this.rememberMeCheckbox.type = "checkbox";
    this.rememberMeCheckbox.id = REMEMBERME_CHECKBOX_ID;
    this.rememberMeCheckbox.name = REMEMBERME_CHECKBOX_ID;
    var rememberMeLabel = document.createElement("label");
    rememberMeLabel.htmlFor = this.rememberMeCheckbox.id;
    rememberMeLabel.innerHTML = "remember me";

    //setup - form - buttons
    //setup - form - button - submit
    this.loginButton = document.createElement("input");
    this.loginButton.type = "button";
    this.loginButton.className = "nraj-button";
    //setup - form - button - close
    this.closeButton = document.createElement("input");
    this.closeButton.type = "button";
    this.closeButton.className = "nraj-button";
    this.closeButton.value = "x";

    //setup - form - message
    this.errMsgParagraph = document.createElement("p");
    this.errMsgParagraph.id = ERR_MESSAGE_TXT;
    this.errMsgParagraph.className = "nraj-err-message nraj-text-center nraj-vanquish";
    this.errMsgParagraph.innerHTML = "wrong username / password";

    //setup - options
    legendForm.style.backgroundColor = this.options.accentColor;
    h2Legend.innerHTML = this.options.loginTitle;
    this.loginButton.value = this.options.loginTextButton;
    this.loginButton.style.backgroundColor = this.options.accentColor;
    this.closeButton.style.backgroundColor = this.options.accentColor;

    //setup - assemble each component of the form
    legendForm.appendChild(h2Legend);
    legendForm.appendChild(this.closeButton);
    loginForm.appendChild(legendForm);
    loginForm.appendChild(this.usernameInput);
    loginForm.appendChild(this.passwordInput);
    checkboxDiv.appendChild(this.rememberMeCheckbox);
    checkboxDiv.appendChild(rememberMeLabel);
    loginForm.appendChild(checkboxDiv);
    // rememberMeCheckbox.appendChild(rememberMeLabel);
    // loginForm.appendChild(rememberMeCheckbox);
    loginForm.appendChild(this.loginButton);
    loginForm.appendChild(this.errMsgParagraph);
    this.modal.appendChild(loginForm);

    doc_fragment.appendChild(this.overlay);
    doc_fragment.appendChild(this.modal);
    document.body.appendChild(doc_fragment);
  }
  //merge our defaults options with user given one
  function extendDefaults(src, props) {
    var prop;
    for (prop in props) {
      if (props.hasOwnProperty(prop)) {
        src[prop] = props[prop];
      }
    }
    return src;
  }
  //add event listener to close button click and overlay to close the form
  function initializeEvents() {
    //  make sure we have the right "Modal" context on the callback handler
    //  by using bind
    this.closeButton.addEventListener('click', this.close.bind(this));
    this.overlay.addEventListener('click', this.close.bind(this));
    this.loginButton.addEventListener('click', this.close.bind(this));
  }

  function validateUser(usernameId, passId, ckbxId, errMsgId) {
    console.log('ya mama!!');
  }

  // method to check which transitionend event is supported by browser
  function transitionSelect() {
    var el = document.createElement("div");
    if (el.style.WebKitTransition) return "webkitTransitionEnd";
    if (el.style.OTransition) return "oTransitionEnd";
    return 'transitionend';
  }
}());
