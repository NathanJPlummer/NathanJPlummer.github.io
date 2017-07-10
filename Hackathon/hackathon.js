
        var questions = 1;
        var error = document.querySelector('.show-error');

        var inps = document.querySelectorAll('.inp');
        var txt = document.querySelector('textarea');
        var next_btns = document.querySelectorAll('.next-question');

        txt.addEventListener("focusin", function(e){
          error.className = "show-error hid";
        });

        for (var i = 0; i < next_btns.length; i++) {
            inps[i].addEventListener("focusin", function(e){
              error.className = "show-error hid";
            });

            next_btns[i].addEventListener("click", function(e) {
                processQuestion(this.parentNode);
            });
        }

        // Getting the capsule question...
        function processQuestion(qst){

          if(questions == 5){
            var ans = qst.querySelector("textarea").value;
          }else{
            var ans = qst.querySelector("input").value;
          }

          if( isEmpty(ans) ){
            error.className = "show-error shw";
            //alert("This is where the image goes");
          }else{
            questions++;

            var cls = qst.classList;

            nextQuestion(cls);
          }

        }

        function nextQuestion(q){
          error.className = "show-error hid";
          var old_q = parseInt(q[1][1]);
          var q_old = document.querySelector("."+q[1]);
          var new_q = old_q+1;

          if( new_q <= 6){
            q_old.className+=" hide";
            var q_new = document.querySelector(".q"+new_q);
            q_new.className+=" visible";
          }else{
            alert("End of the questions");
          }

        }

        function getAncestor(el, ancestor) {

            while ((el = el.parentElement) && !el.classList.contains(ancestor));

            return el;
        }

        function isEmpty(input) {
            if (input == "") {
                return true;
            } else {
                var nothing;
                nothing = input.split(" ").join("");

                return nothing.length == 0;
            }
        }
