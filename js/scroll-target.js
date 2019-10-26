window.addEventListener('scroll', function(e) {
    // var d = document.documentElement.scrollTop || document.body.scrollTop;
    var h = window.innerHeight;
    document.querySelectorAll('.scroll-target').forEach(function(target) {
        var link = document.querySelector("[href='#" + target.id + "']");
        if (target.getBoundingClientRect().top < h*0.5) {
        // if (target.getBoundingClientRect().top < h*0.5 && target.getBoundingClientRect().bottom > h*0.5) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    })
});