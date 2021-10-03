document.addEventListener("DOMContentLoaded", function () {
    var tags = document.getElementsByClassName('n_button')
    for (var p = 0; p < tags.length; p++) {
        tags[p].addEventListener('click', function (event) {
            var target = document.getElementsByClassName("active");
            target[0].className = target[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});