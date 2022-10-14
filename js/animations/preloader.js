export default function animatePreloader() {
    let tl = gsap.timeline({});

    let preloader_block = document.querySelector('.preloader');

    if (preloader_block) {

        let solid_bg = preloader_block.querySelector('.solid-bg');
        let title = preloader_block.querySelector('h1 span');

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
    }

}