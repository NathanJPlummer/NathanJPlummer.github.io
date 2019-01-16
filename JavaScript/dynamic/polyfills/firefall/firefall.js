/*$(function() {

  // text that is typed when when pressing the
  // keyboard icon (actual code using .typeIn()
  // is at the bottom of this code block

  $('#evo-c-dotValidator-search').keyboard({

      // Used by jQuery UI position utility
      position: {
      // null = attach to input/textarea;
      // use $(sel) to attach elsewhere
      of: $("#virtualCell-contentPane-Projects-Default"),
      my: 'center bottom',
      at: 'center bottom',
      // used when "usePreview" is false
      at2: 'center bottom'
    },


      // allow jQuery position utility to reposition the keyboard on
      // window resize
      reposition: true,

      // true: preview added above keyboard;
      // false: original input/textarea used
      usePreview: false,

      // if true, the keyboard will always be visible
      alwaysOpen: false,

      // give the preview initial focus when the keyboard
      // becomes visible
      initialFocus: true,
      // Avoid focusing the input the keyboard is attached to
      noFocus: false,

      // if true, keyboard will remain open even if
      // the input loses focus.
      stayOpen: false,

      // Prevents the keyboard from closing when the user clicks or
      // presses outside the keyboard. The `autoAccept` option must
      // also be set to true when this option is true or changes are lost
      userClosed: false,

      // if true, keyboard will not close if you press escape.
      ignoreEsc: false,

      css: {
        // input & preview
        input: 'ui-widget-content ui-corner-all',
        // keyboard container
        container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
        // keyboard container extra class (same as container, but separate)
        popup: '',
        // default state
        buttonDefault: 'ui-state-default ui-corner-all',
        // hovered button
        buttonHover: 'ui-state-hover',
        // Action keys (e.g. Accept, Cancel, Tab, etc);
        // this replaces "actionClass" option
        buttonAction: 'ui-state-active',
        // Active keys
        // (e.g. shift down, meta keyset active, combo keys active)
        buttonActive: 'ui-state-active',
        // used when disabling the decimal button {dec}
        // when a decimal exists in the input area
        buttonDisabled: 'ui-state-disabled',
        // {empty} button class name
        buttonEmpty: 'ui-keyboard-empty'
      },

      // *** Useability ***
      // Auto-accept content when clicking outside the
      // keyboard (popup will close)
      autoAccept: false,
      // Auto-accept content even if the user presses escape
      // (only works if `autoAccept` is `true`)
      autoAcceptOnEsc: false,

      // Prevents direct input in the preview window when true
      lockInput: false,

      // Prevent keys not in the displayed keyboard from being
      // typed in
      restrictInput: false,
      // Additional allowed characters while restrictInput is true
      restrictInclude: '', // e.g. 'a b foo \ud83d\ude38'

      // Check input against validate function, if valid the
      // accept button is clickable; if invalid, the accept
      // button is disabled.
      acceptValid: true,
      // Auto-accept when input is valid; requires `acceptValid`
      // set `true` & validate callback
      autoAcceptOnValid: false,

      // if acceptValid is true & the validate function returns
      // a false, this option will cancel a keyboard close only
      // after the accept button is pressed
      cancelClose: true,

      // tab to go to next, shift-tab for previous
      // (default behavior)
      tabNavigation: false,

      // enter for next input; shift-enter accepts content &
      // goes to next shift + "enterMod" + enter ("enterMod"
      // is the alt as set below) will accept content and go
      // to previous in a textarea
      enterNavigation: false,
      // mod key options: 'ctrlKey', 'shiftKey', 'altKey',
      // 'metaKey' (MAC only)
      // alt-enter to go to previous;
      // shift-alt-enter to accept & go to previous
      enterMod: 'altKey',

      // if true, the next button will stop on the last
      // keyboard input/textarea; prev button stops at first
      // if false, the next button will wrap to target the
      // first input/textarea; prev will go to the last
      stopAtEnd: true,

      // Set this to append the keyboard immediately after the
      // input/textarea it is attached to. This option works
      // best when the input container doesn't have a set width
      // and when the "tabNavigation" option is true
      appendLocally: false,
      // When appendLocally is false, the keyboard will be appended
      // to this object
      appendTo: 'body',

      // If false, the shift key will remain active until the
      // next key is (mouse) clicked on; if true it will stay
      // active until pressed again
      stickyShift: true,

      // Prevent pasting content into the area
      preventPaste: false,

      // caret places at the end of any text
      caretToEnd: false,

      // caret stays this many pixels from the edge of the input
      // while scrolling left/right; use "c" or "center" to center
      // the caret while scrolling
      scrollAdjustment: 10,

      // Set the max number of characters allowed in the input,
      // setting it to false disables this option
      maxLength: false,
      // allow inserting characters @ caret when maxLength is set
      maxInsert: true,

      // Mouse repeat delay - when clicking/touching a virtual
      // keyboard key, after this delay the key will start
      // repeating
      repeatDelay: 500,

      // Mouse repeat rate - after the repeatDelay, this is the
      // rate (characters per second) at which the key is
      // repeated. Added to simulate holding down a real keyboard
      // key and having it repeat. I haven't calculated the upper
      // limit of this rate, but it is limited to how fast the
      // javascript can process the keys. And for me, in Firefox,
      // it's around 20.
      repeatRate: 20,

      // resets the keyboard to the default keyset when visible
      resetDefault: false,

      // Event (namespaced) on the input to reveal the keyboard.
      // To disable it, just set it to ''.
      openOn: 'focus',

      // Event (namepaced) for when the character is added to the
      // input (clicking on the keyboard)
      keyBinding: 'mousedown touchstart',

      // enable/disable mousewheel functionality
      // enabling still depends on the mousewheel plugin
      useWheel: true,

      // combos (emulate dead keys)
      // if user inputs `a the script converts it to à,
      // ^o becomes ô, etc.
      useCombos: true,

      // *** Methods ***
      // Callbacks - attach a function to any of these
      // callbacks as desired
      change: function(e, keyboard, el) {
        //used by dotValidator for the validation dot
             validateMe(document.getElementById('evo-c-dotValidator-search'));
         },
    })
});*/

function createVKeyboard(inputID, containerID,layout) {

  // text that is typed when when pressing the
  // keyboard icon (actual code using .typeIn()
  // is at the bottom of this code block

  $(inputID).keyboard({

      // Used by jQuery UI position utility
      position: {
      // null = attach to input/textarea;
      // use $(sel) to attach elsewhere
      of: $(containerID),
      my: 'center bottom',
      at: 'center bottom',
      // used when "usePreview" is false
      at2: 'center bottom'
    },

    layout: layout,


      // allow jQuery position utility to reposition the keyboard on
      // window resize
      reposition: true,

      // true: preview added above keyboard;
      // false: original input/textarea used
      usePreview: false,

      // if true, the keyboard will always be visible
      alwaysOpen: false,

      // give the preview initial focus when the keyboard
      // becomes visible
      initialFocus: true,
      // Avoid focusing the input the keyboard is attached to
      //must be true to prevent Adroid keyboard popup
      noFocus: true,

      // if true, keyboard will remain open even if
      // the input loses focus.
      stayOpen: false,

      // Prevents the keyboard from closing when the user clicks or
      // presses outside the keyboard. The `autoAccept` option must
      // also be set to true when this option is true or changes are lost
      userClosed: false,

      // if true, keyboard will not close if you press escape.
      ignoreEsc: false,

      css: {
        // input & preview
        input: 'ui-widget-content ui-corner-all',
        // keyboard container
        container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
        // keyboard container extra class (same as container, but separate)
        popup: '',
        // default state
        buttonDefault: 'ui-state-default ui-corner-all',
        // hovered button
        buttonHover: 'ui-state-hover',
        // Action keys (e.g. Accept, Cancel, Tab, etc);
        // this replaces "actionClass" option
        buttonAction: 'ui-state-active',
        // Active keys
        // (e.g. shift down, meta keyset active, combo keys active)
        buttonActive: 'ui-state-active',
        // used when disabling the decimal button {dec}
        // when a decimal exists in the input area
        buttonDisabled: 'ui-state-disabled',
        // {empty} button class name
        buttonEmpty: 'ui-keyboard-empty'
      },

      // *** Useability ***
      // Auto-accept content when clicking outside the
      // keyboard (popup will close)
      autoAccept: false,
      // Auto-accept content even if the user presses escape
      // (only works if `autoAccept` is `true`)
      autoAcceptOnEsc: false,

      // Prevents direct input in the preview window when true
      lockInput: false,

      // Prevent keys not in the displayed keyboard from being
      // typed in
      restrictInput: false,
      // Additional allowed characters while restrictInput is true
      restrictInclude: '', // e.g. 'a b foo \ud83d\ude38'

      // Check input against validate function, if valid the
      // accept button is clickable; if invalid, the accept
      // button is disabled.
      acceptValid: true,
      // Auto-accept when input is valid; requires `acceptValid`
      // set `true` & validate callback
      autoAcceptOnValid: false,

      // if acceptValid is true & the validate function returns
      // a false, this option will cancel a keyboard close only
      // after the accept button is pressed
      cancelClose: true,

      // tab to go to next, shift-tab for previous
      // (default behavior)
      tabNavigation: false,

      // enter for next input; shift-enter accepts content &
      // goes to next shift + "enterMod" + enter ("enterMod"
      // is the alt as set below) will accept content and go
      // to previous in a textarea
      enterNavigation: false,
      // mod key options: 'ctrlKey', 'shiftKey', 'altKey',
      // 'metaKey' (MAC only)
      // alt-enter to go to previous;
      // shift-alt-enter to accept & go to previous
      enterMod: 'altKey',

      // if true, the next button will stop on the last
      // keyboard input/textarea; prev button stops at first
      // if false, the next button will wrap to target the
      // first input/textarea; prev will go to the last
      stopAtEnd: true,

      // Set this to append the keyboard immediately after the
      // input/textarea it is attached to. This option works
      // best when the input container doesn't have a set width
      // and when the "tabNavigation" option is true
      appendLocally: false,
      // When appendLocally is false, the keyboard will be appended
      // to this object
      appendTo: 'body',

      // If false, the shift key will remain active until the
      // next key is (mouse) clicked on; if true it will stay
      // active until pressed again
      stickyShift: true,

      // Prevent pasting content into the area
      preventPaste: false,

      // caret places at the end of any text
      caretToEnd: false,

      // caret stays this many pixels from the edge of the input
      // while scrolling left/right; use "c" or "center" to center
      // the caret while scrolling
      scrollAdjustment: 10,

      // Set the max number of characters allowed in the input,
      // setting it to false disables this option
      maxLength: false,
      // allow inserting characters @ caret when maxLength is set
      maxInsert: true,

      // Mouse repeat delay - when clicking/touching a virtual
      // keyboard key, after this delay the key will start
      // repeating
      //repeatDelay: 500,

      // Mouse repeat rate - after the repeatDelay, this is the
      // rate (characters per second) at which the key is
      // repeated. Added to simulate holding down a real keyboard
      // key and having it repeat. I haven't calculated the upper
      // limit of this rate, but it is limited to how fast the
      // javascript can process the keys. And for me, in Firefox,
      // it's around 20.
      repeatRate: 20,

      // resets the keyboard to the default keyset when visible
      resetDefault: false,

      // Event (namespaced) on the input to reveal the keyboard.
      // To disable it, just set it to ''.
      openOn: 'focus',

      // Event (namepaced) for when the character is added to the
      // input (clicking on the keyboard)
      keyBinding: 'touchstart',

      // enable/disable mousewheel functionality
      // enabling still depends on the mousewheel plugin
      useWheel: true,

      // combos (emulate dead keys)
      // if user inputs `a the script converts it to à,
      // ^o becomes ô, etc.
      useCombos: true,

      // *** Methods ***
      // Callbacks - attach a function to any of these
      // callbacks as desired

      beforeVisible: function (e, keyboard, el) {
        //prevent native keyboard
        console.log('blur');
               keyboard.el.blur();
         },

      change: function(e, keyboard, el) {
        //used by dotValidator for the validation dot
             validateMe(document.getElementById(inputID.substr(1)));
         },

    })
};

createVKeyboard('#evo-c-dotValidator-search', "#virtualCell-contentPane-Projects-Default","qwerty");

createVKeyboard('#evo-c-dotValidator-email', "#virtualCell-contentPane-Projects-Default");

createVKeyboard('#evo-c-dotValidator-phone', "#virtualCell-contentPane-Projects-Default", "num");

createVKeyboard('#evo-c-dotValidator-number', "#virtualCell-contentPane-Projects-Default", "num");

createVKeyboard('#evo-c-dotValidator-password', "#virtualCell-contentPane-Projects-Default");

createVKeyboard('#evo-c-dotValidator-username', "#virtualCell-contentPane-Projects-Default");

createVKeyboard('#evo-c-dotValidator-zipcode', "#virtualCell-contentPane-Projects-Default","num");

createVKeyboard('#powerSearch-searchbox', "virtualCell-contentPane-Projects-PowerSearch");
