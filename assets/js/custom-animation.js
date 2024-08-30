const preloader = gsap.timeline({default: {duration: 1}});
preloader.fromTo('.preloader',{opacity: 1,display:'flex',},{delay: 6,opacity: 0,duration: 1,display:'none',ease: Power2.easeInOut},0)
preloader.fromTo('.overlay',{opacity: 1,display:'block',},{delay: 6.2,opacity: 0,duration: 1,display:'none',ease: Power2.easeInOut},0)
preloader.fromTo('.header',{opacity: 0,},{delay: 6,opacity: 1,duration: 1,ease: Power2.easeInOut},0)
preloader.fromTo('.header__logo',{opacity: 0,y: -50},{delay: 6.2,opacity: 1,duration: 1,y: 0,ease: Power2.easeInOut},0)
preloader.fromTo('.hero__area',{opacity: 0,scale:0,yPercent: 80},{delay: 6.5,opacity: 1,duration: 2,scale:1,yPercent: 0,ease: Power2.easeInOut},0)
preloader.fromTo('.header__right', { opacity: 0,y: 50,},{delay: 7.3,opacity: 1,duration: 1,y: 0,ease: Power2.easeInOut}, 0)