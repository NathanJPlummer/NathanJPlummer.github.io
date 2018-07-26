  var allInputs = document.getElementsByTagName('input');

  for (i = 0; i < allInputs.length; i++) {
    allInputs[i].readOnly = true;
  }

  /*****Set up virtual keyboard******/

  //Keyboard CSS
  dynamicallyLoadCSS("./JavaScript/dynamic/polyfills/firefall/virt-keyboard/keyboard.css");

  //CSS code for keyboard preview
  dynamicallyLoadCSS("./JavaScript/dynamic/polyfills/firefall/virt-keyboard/keyboard-previewkeyset.css");

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
      LoadLibrary('./JavaScript/dynamic/polyfills/firefall/virt-keyboard/jquery.keyboard.js',
        function() {
          LoadLibrary('http://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js',
            function() {
              dynamicallyLoadScript("./JavaScript/dynamic/polyfills/firefall/firefall.js");
            }
          );
        }
      );
    }
  );
