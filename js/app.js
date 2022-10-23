document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({});

    let content = document.querySelector('.content');

    if (content) {

        let preloader = document.querySelector('.preloader');
        let app_screen = document.querySelector('.app');

        let solid_bg = preloader.querySelector('.solid-bg');
        let title = preloader.querySelector('h1 span');
        let images = preloader.querySelector('.images');
        let all_images = preloader.querySelectorAll('.images img');

        // Scale down the content area
        tl.fromTo(content,
        {
            scale: 1
        },
        {
            scale: 0.8,
            duration: 1
        });

        // Animate the orange background from bottom to top
        tl.fromTo(solid_bg,
        {
            y: 850
        },
        {
            ease: "power4.inOut",
            duration: 1.2,
            y: 0
        }, '-=0.1');

        // Animate the app title unto view
        tl.fromTo(title, 
        {
            y: 50,
        },
        {
            duration: 1,
            y: 0
        },'-=0.5');

        // Animate the orange background out of view
        tl.to(solid_bg, 
        {
            ease: "power4.inOut",
            y: -850,
            duration: 1
        });

        // Animate the app title out of view
        tl.to(title,
        {
            y: -50,
            duration: 4
        }, '-=0.9');

        // Animate the images unto view
        tl.fromTo(images,
        {
            autoAlpha: 0
        },
        {
            autoAlpha: 1
        }, '-=4.5');

        // Animating the cards, first scale the cards from large to original size,
        // then clip the card out of view from bottom to top. Make sure to stagger them.

        tl.fromTo(all_images,
        {
            'clip-path': 'inset(0 0 0px 0)',
            scale: 1.5
        },
        {
            scale: 1,
            'clip-path': 'inset(0 0 1000px 0)',
            ease: "expo.inOut",
            duration: 2,
            stagger: 0.5
        }, '-=4');

        
        // Bring the app-screen to the viewport but remains in the background
        tl.fromTo(app_screen,
        {
            autoAlpha: 0
        },
        {
            autoAlpha: 1
        }, '-=3');
        
        
        // Scale the content area back to original size, this has to happen
        // as the last card is clipping out of view
        tl.to(content,
        {
            scale: 1,
            duration: 1
        }, '-=1');


        // Animate the app header
        let app_header = app_screen.querySelector('.app__header');
        let logo = app_header.querySelector('.col .logo');
        let hamburger = app_header.querySelectorAll('.col .hamburger .line');

        // Clip the logo into view from top to bottom
        tl.fromTo(logo, 
        {
            'clip-path': 'inset(0 0 24px 0)',
        },
        {
            'clip-path': 'inset(0 0 0px 0)',
            duration: .74
        },'-=0.3');
        
        // Animate the hamburgers, both has to be from left to right and needs to stagger.
        tl.fromTo(hamburger, 
        { 
            x: -45 
        }, 
        { 
            x: 0, 
            duration: .8,
            stagger: 0.2
        },'-=0.5');


        // Animate the cta
        let app_cta = app_screen.querySelector('.app__cta');
        let cta_title = app_cta.querySelectorAll('.col .title');
        let cta_title_items = app_cta.querySelectorAll('.col .title span');
        let btns = app_cta.querySelectorAll('.btn-group .btn');

        tl.fromTo(cta_title, 
        {
            y: 20
        },
        {
            y: 0,
            duration: .7,
        },'-=1.05');

        tl.fromTo(cta_title_items, 
        {
            'clip-path': 'inset(0 0 80px 0)',
        },
        {
            'clip-path': 'inset(0 0 0px 0)',
            duration: .7
        },'-=1.05');

        tl.fromTo(btns, 
        {
            'clip-path': 'inset(80px 0 0 0)',
        },
        {
            'clip-path': 'inset(0px 0 0 0)',
            duration: .74,
            // ease: "power4.out",
            stagger: 0.2
        },'-=0.7');

        // Animate the footer
        let app_footer = app_screen.querySelector('.app__footer');
        let line = app_footer.querySelector('.row hr');
        let text_slider = app_footer.querySelector('.col .slider.texts');
        let image_slider = app_footer.querySelectorAll('.col .slider.images .image');

        tl.fromTo(line, 
        {
            'clip-path': 'inset(0 420px 0 0)',
        },
        {
            'clip-path': 'inset(0 0px 0 0)',
            duration: 1.25
        },'-=1.4');

        tl.fromTo(text_slider, 
        { 
            x: 200, 
            autoAlpha: 0 
        }, 
        { 
            x: 0, 
            autoAlpha: 1, 
            duration: 1
        },'-=1.4');

        tl.fromTo(image_slider, 
        {
            'clip-path': 'inset(130px 0 0 0)',
        },
        {
            'clip-path': 'inset(0px 0 0 0)',
            stagger: 0.2,
            duration: .74
        },'-=1');


    }
});

// Positive values always take time
// The small the negative value the more it delays.
// The higher the negative value the quicker it animates.