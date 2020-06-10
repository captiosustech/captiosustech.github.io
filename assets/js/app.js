// if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
//     $(function() {

//         var wrapperMenu = document.querySelector('.wrapper-menu');

//         if (wrapperMenu) {
//             wrapperMenu.addEventListener('click', function() {
//                 wrapperMenu.classList.toggle('open');
//             })
//         }


//         // var body = document.body;
//         // var cursor = document.createElement("div");
//         // var stalker = document.createElement("div");
//         // cursor.id = "cursor";
//         // stalker.id = "stalker";
//         // body.appendChild(cursor);
//         // body.appendChild(stalker);
//         // body.addEventListener("mousemove", function (e) {
//         //     cursor.style.left = e.clientX + "px";
//         //     cursor.style.top = e.clientY + "px";
//         //     stalker.style.left = e.clientX + "px";
//         //     stalker.style.top = e.clientY + "px";
//         // }, false);

//         // $("a").on("mouseenter", function () {
//         //     $('#cursor').addClass("active");
//         //     $('#stalker').addClass("active");
//         // });

//         // $("a").on("mouseleave", function () {
//         //     $('#cursor').removeClass("active");
//         //     $('#stalker').removeClass("active");
//         // });
//     });
// }

console.log('app.js');

// $(document).ready(function() {
//     var $slider = $('.slideshow .slider'),
//         maxItems = $('.item', $slider).length,
//         dragging = false,
//         tracking,
//         rightTracking;

//     $sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

//     rightItems = $('.item', $sliderRight).toArray();
//     reverseItems = rightItems.reverse();
//     $('.slider', $sliderRight).html('');
//     for (i = 0; i < maxItems; i++) {
//         $(reverseItems[i]).appendTo($('.slider', $sliderRight));
//     }

//     $slider.addClass('slideshow-left');
//     $('.slideshow-left').slick({
//         vertical: true,
//         verticalSwiping: true,
//         arrows: false,
//         infinite: true,
//         dots: true,
//         speed: 1000,
//         cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
//     }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

//         if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
//             $('.slideshow-right .slider').slick('slickGoTo', -1);
//             $('.slideshow-text').slick('slickGoTo', maxItems);
//         } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
//             $('.slideshow-right .slider').slick('slickGoTo', maxItems);
//             $('.slideshow-text').slick('slickGoTo', -1);
//         } else {
//             $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
//             $('.slideshow-text').slick('slickGoTo', nextSlide);
//         }
//     }).on("mousewheel", function(event) {
//         event.preventDefault();
//         if (event.deltaX > 0 || event.deltaY < 0) {
//             $(this).slick('slickNext');
//         } else if (event.deltaX < 0 || event.deltaY > 0) {
//             $(this).slick('slickPrev');
//         };
//     }).on('mousedown touchstart', function() {
//         dragging = true;
//         tracking = $('.slick-track', $slider).css('transform');
//         tracking = parseInt(tracking.split(',')[5]);
//         rightTracking = $('.slideshow-right .slick-track').css('transform');
//         rightTracking = parseInt(rightTracking.split(',')[5]);
//     }).on('mousemove touchmove', function() {
//         if (dragging) {
//             newTracking = $('.slideshow-left .slick-track').css('transform');
//             newTracking = parseInt(newTracking.split(',')[5]);
//             diffTracking = newTracking - tracking;
//             $('.slideshow-right .slick-track').css({ 'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')' });
//         }
//     }).on('mouseleave touchend mouseup', function() {
//         dragging = false;
//     });

//     $('.slideshow-right .slider').slick({
//         swipe: false,
//         vertical: true,
//         arrows: false,
//         infinite: true,
//         speed: 950,
//         cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
//         initialSlide: maxItems - 1
//     });
//     $('.slideshow-text').slick({
//         swipe: false,
//         vertical: true,
//         arrows: false,
//         infinite: true,
//         speed: 900,
//         cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
//     });


//     // Draggable Grid

//     /*--------------------
// Vars
// --------------------*/
//     const grids = [];

//     /*--------------------
//                       Mouse & Listeners
//                       --------------------*/
//     const mouse = {
//         x: window.innerWidth / 2,
//         y: window.innerHeight / 2,
//         oldX: window.innerWidth / 2,
//         oldY: window.innerHeight / 2,
//         startX: 0,
//         startY: 0,
//         speedX: 0,
//         speedY: 0
//     };


//     const getMouse = e => {
//         if (e) {
//             return false;
//         }
//         mouse.x = e.clientX || e.touches[0].clientX;
//         mouse.y = e.clientY || e.touches[0].clientY;
//         mouse.speedX = mouse.oldX - mouse.x;
//         mouse.speedY = mouse.oldY - mouse.y;
//         e.stopPropagation();
//         return false;
//     };

//     document.addEventListener('mousemove', getMouse);
//     document.addEventListener('touchmove', getMouse);

//     const setMouseStart = e => {
//         mouse.startX = e.clientX || e.touches[0].clientX;
//         mouse.startY = e.clientY || e.touches[0].clientY;
//     };
//     window.addEventListener('mousedown', setMouseStart);
//     window.addEventListener('touchstart', setMouseStart);


//     /*--------------------
//                                                           Win & Listeners
//                                                           --------------------*/
//     const win = {
//         width: window.innerWidth,
//         height: window.innerHeight
//     };

//     const getWin = () => {
//         win.height = window.innerHeight;
//         win.width = window.innerWidth;
//     };
//     window.addEventListener('resize', getWin);


//     /*--------------------
//                                                Grids Helpers
//                                                --------------------*/
//     const dragOff = () => {
//         grids.forEach(g => {
//             if (g.isDragging) {
//                 g.isReleased = true;
//             }
//         });
//     };
//     window.addEventListener('mouseup', dragOff);
//     window.addEventListener('mouseleave', dragOff);
//     window.addEventListener('touchend', dragOff);
//     window.addEventListener('touchleave', dragOff);


//     /*--------------------
//                                                     Animate
//                                                     --------------------*/
//     const animate = () => {
//         grids.forEach(g => {
//             g.draw();
//         });
//         mouse.oldX = mouse.x;
//         mouse.oldY = mouse.y;
//         requestAnimationFrame(animate);
//     };
//     animate();


//     /*--------------------
//                Grid
//                --------------------*/
//     class Grid {
//         constructor(o) {
//             this.el = document.getElementsByClassName('grid')[0];
//             this.radius = o.radius || 10;
//             this.x = o.x || window.innerWidth / 2;
//             this.y = o.y || window.innerHeight / 2;
//             this.endX = this.x;
//             this.endY = this.y;
//             this.smoothness = this.smoothness || 0.1;
//             this.isDragging = false;
//             this.isReleased = false;

//             this.bounds = this.el.getBoundingClientRect();
//             this.el.style.margin = `-${this.bounds.height / 2}px -${this.bounds.width / 2}px`;
//             this.events();
//         }

//         events() {
//             ['mousedown', 'touchstart'].forEach(e => {
//                 this.el.addEventListener(e, () => {
//                     this.isDragging = true;
//                 });
//             });
//         }

//         draw() {
//             if (this.isReleased && this.isDragging) {
//                 this.actualX = this.x;
//                 this.actualY = this.y;
//                 this.isReleased = false;
//                 this.isDragging = false;
//                 document.body.classList.remove('dragging');
//             }

//             if (this.isDragging) {
//                 document.body.classList.add('dragging');
//                 console.log(mouse.startX - mouse.x);
//                 this.endX = Math.max(-this.bounds.width / 2 + win.width, Math.min(this.x - (mouse.startX - mouse.x), this.bounds.width / 2));
//                 this.endY = Math.max(-this.bounds.height / 2 + win.height, Math.min(this.y - (mouse.startY - mouse.y), this.bounds.height / 2));
//             }


//             this.x += (this.endX - this.x) * this.smoothness;
//             this.y += (this.endY - this.y) * this.smoothness;
//             this.el.style.transform = `translate(${this.x}px, ${this.y}px)`;
//         }
//     }

//     if ($('#grid').length) {

//         grids.push(new Grid({ radius: 20, x: win.width / 2, y: win.height / 2 }));
//     }


// });



// $(document).on("mousemove", '.hover-move-anim', function(t) {
//     var o = $(this).find('.card');
//     var e = -($(window).innerWidth() / 2 - t.pageX) / 50,
//         n = ($(window).innerHeight() / 2 - t.pageY) / 80;
//     o.attr("style", "transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-webkit-transform: rotateY(" + e + "deg) rotateX(" + n + "deg);-moz-transform: rotateY(" + e + "deg) rotateX(" + n + "deg)")
// })

// $(document).on("mouseleave", '.hover-move-anim', function(t) {
//     var o = $(this).find('.card');
//     o.attr("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)")
// })

$(window).scroll(function() {
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) { sticky.addClass('fixed'); } else { sticky.removeClass('fixed') }
});