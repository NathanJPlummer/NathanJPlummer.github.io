var form = document.querySelector("form");

form.addEventListener("keypress", function (event) {

    var search = document.querySelector('input[name="search"]');
    var key = event.which;

    if (key === 13) {
        if (search.value === "") {
            search.setCustomValidity("Please enter a search term");
        } else {
            search.setCustomValidity("");
            search.submit();
        }
    }
});
