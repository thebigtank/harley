export default function animatePreloader() {
    let tl = gsap.timeline({});

    let content = document.querySelector('.main-container .container .content');

    if (content) {

        let preloader_block = document.querySelector('.preloader');
        let app_screen = document.querySelector('.app');

        let solid_bg = preloader_block.querySelector('.solid-bg');
        let title = preloader_block.querySelector('h1 span');
        let images = preloader_block.querySelector('.images');


        let _01 = preloader_block.querySelector('.images .img_01');
        let _02 = preloader_block.querySelector('.images .img_02');
        let _03 = preloader_block.querySelector('.images .img_03');
        let _04 = preloader_block.querySelector('.images .img_04');
        let _05 = preloader_block.querySelector('.images .img_05');

        tl.fromTo(solid_bg, 
        {
            y: 850
        },
        {
            // ease: "power4.inOut",
            duration: 1,
            y: 0
        }, '+=0.3');

        tl.fromTo(title, 
        {
            y: 50,
        },
        {
            duration: 1.4,
            y: 0
        },'+=0.2');

        tl.to(solid_bg, 
        {
            // ease: "power4.inOut",
            y: -850,
            duration: 1
        });

        tl.to(title,
        {
            y: -50,
            duration: 2
        }, '-=0.95');



        // bring the app-screen to the viewport
        tl.fromTo(app_screen,
        {
            opacity: 0
        },
        {
            opacity: 1,
        }, '-=0.3');

        

        // Animated the images
        tl.fromTo(images,
        {
            y: 850
        },
        {
            y: 0
        }, '-=3');

        tl.fromTo(_05, {scale: 1.5},{scale: 1,duration: 2}, '-=2');

        tl.fromTo(_05,
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 1.5
        }, '-=1.3');


        tl.fromTo(_04, {scale: 1.5},{scale: 1,duration: 2}, '-=2');

        tl.fromTo(_04,
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 1.5
        }, '-=0.3');

        tl.fromTo(_03, {scale: 1.5},{scale: 1,duration: 2}, '-=2');

        tl.fromTo(_03,
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 1.5
        }, '-=0.3');

        tl.fromTo(_02, {scale: 1.5},{scale: 1,duration: 2}, '-=2');

        tl.fromTo(_02,
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 1.5
        }, '-=0.3');

        tl.fromTo(_01, {scale: 1.5},{scale: 1,duration: 2}, '-=2');

        tl.fromTo(_01,
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
            duration: 1.5
        }, '-=0.3');


        // Animate the app header
        let app_header = app_screen.querySelector('.app__header');
        let logo = app_header.querySelector('.col .logo');
        let hamburger_line_1 = app_header.querySelectorAll('.col .hamburger .line_1');
        let hamburger_line_2 = app_header.querySelectorAll('.col .hamburger .line_2');

        tl.fromTo(logo, 
        {
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: .74
        },'+=0.2');
        

        tl.fromTo(hamburger_line_1, { x: -45 }, { x: 0, duration: .8 },'-=0.6');
        tl.fromTo(hamburger_line_2, { x: -45 }, { x: 0, duration: .8 },'-=0.55');


        // Animate the cta
        let app_cta = app_screen.querySelector('.app__cta');
        let cta_title = app_cta.querySelectorAll('.col .title');
        let cta_title_items = app_cta.querySelectorAll('.col .title span');
        let btn_primary = app_cta.querySelector('.btn-group .btn.primary');
        let btn_icon = app_cta.querySelector('.btn-group .btn.icon');

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
            'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: .7
        },'-=1.05');

        tl.fromTo(btn_primary, 
        {
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: .74
        },'-=0.7');

        tl.fromTo(btn_icon, 
        {
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: .74
        },'-=0.4');

        // Animate the footer
        let app_footer = app_screen.querySelector('.app__footer');
        let line = app_footer.querySelector('.row hr');
        let text_slider = app_footer.querySelector('.col .slider.texts');
        let image_slider = app_footer.querySelectorAll('.col .slider.images .image');

        tl.fromTo(line, 
        {
            'clip-path': 'polygon(0% 100%, 0% 100%, 0% 0%, 0% 0%)',
        },
        {
            'clip-path': 'polygon(0px 100%, 100% 100%, 100% 0%, 0% 0%)',
            duration: 1.25
        },'-=1.4');

        tl.fromTo(text_slider, 
        { 
            x: 200, 
            opacity: 0 
        }, 
        { 
            x: 0, 
            opacity: 1, 
            duration: 1
        },'-=1.4');

        tl.fromTo(image_slider, 
        {
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
            'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            stagger: 0.2,
            duration: .74
        },'-=1');


    }

}