document.addEventListener("DOMContentLoaded", function(event) {

            // wait until window is loaded - meaning all images, stylesheets, js, fonts, media assets, and links
            window.addEventListener("load", function(e) {

                    document.body.style.display = 'block';
                var tl = new TimelineMax();

                tl.staggerFrom('section', 2, {
                opacity: 0,
                scale: .5,
                ease: Power2.easeOut
                }, 0.2)

                // show .from() initially
                tl.staggerFrom('h1, h2', .5, {
                opacity: 0,
                y: -40,
                ease: Power2.easeInOut
                }, 0.2, "-=2")

                tl.staggerFrom('.anim-panel', 1, {
                opacity: 0,
                y: -40,
                ease: Power2.easeInOut
                }, 0.2, "-=1.5")

            }, false);
        });