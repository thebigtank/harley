export default function animatePreloader() {
    let tl = gsap.timeline({});

    let preloader_block = document.querySelector('.preloader');
    let app_screen = document.querySelector('.app');

    if (preloader_block) {

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
        });

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
            y: -850,
            duration: 1
        });

        tl.to(title,
        {
            y: -50,
            duration: 2
        }, '-=0.95');

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



        // bring the app-screen to the viewport

        tl.fromTo(app_screen,
        {
            opacity: 0
        },
        {
            opacity: 1,
        }, '-=0.3');



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

















        // images.querySelectorAll('img').forEach(element => {

        //     tl.fromTo(element,
        //     {
        //         scale: 1.5,
        //     },
        //     {
        //         scale: 1,
        //         duration: 2,
        //     }, '-=2');
    
        //     tl.to(element,
        //     {
        //         'clip-path': 'polygon(0px 0%, 100% 0%, 100% 0%, 0% 0%)',
        //         duration: 1.5
        //     }, '-=1.3');
        // });


    }

}