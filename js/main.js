var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numerals = '0123456789';
var characters = "!?¡¿.,:;...‘’“”*-–—\"'&()@/`´†‡|¦{}·•®™©^$£€¥%‰#<>+=−×÷≥≤±≈~°≠ÀÃÆÇÐÉÊËÈÍÎÏÌÑÓÔÒØÕÖŒÚÛÜÙẂŴẄẀÝŶåäâàãæçêëèîñóôöòøõœúûüùẃŵẅẁŷ"

var str = uppercase.concat(lowercase, numerals, characters)

var target = document.getElementById('chars');
str.split('').forEach(function(char) {
    var span = document.createElement('span');
    span.innerText = char;
    target.appendChild(span);
});

// CAROUSEL START
var slides = document.querySelectorAll('.example-image-item'),
    carousel = document.querySelector('.example-image-carousel'),
    carouselCount = 0,
    scrollInterval,
    isMobile = window.innerWidth < 769,
    interval = 5000;

if (!isMobile) {
    carousel.addEventListener('mousemove', function(e) {
        let mousePos = e.clientX;
        let elWidth = carousel.getBoundingClientRect().right - carousel.getBoundingClientRect().left;
    
        if ((mousePos - carousel.getBoundingClientRect().left) > (elWidth / 2) && (carouselCount / 100) !== (slides.length - 1)) {
            carousel.style.cursor = 'e-resize';
        }
        else if (carouselCount === 0) {
            carousel.style.cursor = 'e-resize';
        }
        else {
            carousel.style.cursor = 'w-resize';
        }
    });
    
    carousel.addEventListener('click', function(e) {
        let mousePos = e.clientX;
        let elWidth = carousel.getBoundingClientRect().right - carousel.getBoundingClientRect().left;
        
        if ((mousePos - carousel.getBoundingClientRect().left) > (elWidth / 2) || carouselCount === 0) {
            sliderEvent();
        } else {
            e = e || window.event;
            e.preventDefault();
            carouselCount -= 100;
            slider();
        }
    });
    
    function sliderEvent(e) {
        e = e || window.event;
        e.preventDefault();
        carouselCount += 100;
        slider();
    }
    
    function slider() {
        switch (carouselCount) {
            case -100:
                carouselCount = 0;
                break;
            case 500:
                carouselCount = 0;
                break;
            default:
                break;
        }
    
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
        }
    }
}

// CAROUSEL END