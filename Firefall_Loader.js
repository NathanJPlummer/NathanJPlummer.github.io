//expensive fallback keyboard or Firefox Mobile/Android
var test_Firefox;
var test_Android;

if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
  test_Firefox = true;
}

if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
  test_Android = true;
}


if ((test_Firefox === true) && (test_Android === true)) {

  var allInputs = document.getElementsByTagName('input');

  for (i = 0; i < allInputs.length; i++) {
    allInputs[i].readOnly = true;
  }

  function dynamicallyLoadScript(url) {
    var script = document.createElement("script"); // Make a script DOM node
    script.src = url; // Set it's src to the provided URL

    document.body.appendChild(script); // Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
  }

  function dynamicallyLoadCSS(url) {
    var head = document.getElementsByTagName('head')[0],
      link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
    return link;
  }

  /*****Set up virtual keyboard******/

  //Generic JQUERY
  //dynamicallyLoadScript("http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js");

  //Keyboard CSS
  dynamicallyLoadCSS("./virt-keyboard/keyboard.css");

  //JQUERY code for the Keyboard
  //dynamicallyLoadScript("./virt-keyboard/jquery.keyboard.js");

  //CSS code for keyboard preview
  dynamicallyLoadCSS("./virt-keyboard/keyboard-previewkeyset.css");

  function LoadLibrary(liburl, callback) {
    var jscript = document.createElement("script");
    jscript.type = 'text/javascript';
    jscript.src = liburl;
    jscript.async = "true";
    //for IE type browsers
    if (jscript.readyState) {
      jscript.onreadystatechange = function() {
        if (jscript.readyState == "loaded" || jscript.readyState == "complete") {
          jscript.onreadystatechange = null;
          callback();
        }
      };
    } else {
      jscript.onload = function() {
        callback();
      };
    }
    document.getElementsByTagName("head")[0].appendChild(jscript);
  }

  LoadLibrary('http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js',
    function() {
      LoadLibrary('./virt-keyboard/jquery.keyboard.js',
        function() {
          LoadLibrary('http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js',
            function() {
              dynamicallyLoadScript("Firefall.js")
            }
          );
        }
      );
    }
  );

}
