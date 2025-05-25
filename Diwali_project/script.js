const receiverName = document.querySelector('#reciever');
      const senderName = document.querySelector('#sender');
      receiverName.innerText = new URLSearchParams(location.search).get("reciever");
      senderName.innerText = new URLSearchParams(location.search).get("sender") || 'ankii..';

      
  

      var tl = gsap.timeline()

      tl.from(".jhalar",{
        opacity: 0,
        y:40,
        duration: 1,
        delay:0.5,
    })
    
    tl.from(".deepak",{
        opacity:0,
        scale:0,
        rotate:360,    
        x:-40,
        duration: 1,
        // stagger same css selector wale elements ko one by one run krwata hai..
        stagger:1,

    })

    gsap.from(".lakshmi_ganesha_img",{
        opacity:0,
        x:-400,
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:".lakshmi_ganesha_img",
            scroller:"body",
            // markers:true,
            start: "top 50%",
            end: "top 20%",
            scrub:2,
        }
    })
    
    gsap.from(".wish",{
        opacity:0,
        // x:-400,
        scale:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".wish",
            scroller:"body",
            // markers:true,
            start: "top 50%",
            end: "top 30%",
            scrub:2,
        }
    })

    gsap.from(".white-card",{
        opacity:0,
        x:-400,
        // scale:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".wish",
            scroller:"body",
            // markers:true,
            start: "top 50%",
            end: "top 30%",
            scrub:2,
        }
    })

    
    gsap.from(".little-girl",{
        opacity:0,
        x:400,
        // scale:0,
        duration:2,
        delay:1,
        scrollTrigger:{
            trigger:".wish",
            scroller:"body",
            // markers:true,
            start: "top 50%",
            end: "top 20%",
            scrub:2,
        }
    })

    var tl1 = gsap.timeline()

    tl1.from(".lakshmi-ganesha-card",{
      opacity: 0,
      y:40,
      duration: 1,
      delay:0.5,
      scrollTrigger:{
        trigger:".lakshmi-ganesha-card",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub:2,
    }
  })
  
  tl1.from(".lakshmi_ji",{
      opacity:0,
    //   scale:0,
      x:-40,
      duration: 1,
      scrollTrigger:{
        trigger:".lakshmi_ji",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub:2,
    }
  })

   tl1.from(".ganesh_ji",{
    opacity:0,
    //   scale:0,
      x:40,
      duration: 1,
      scrollTrigger:{
        trigger:".ganesh_ji",
        scroller:"body",
        // markers:true,
        start: "top 50%",
        end: "top 20%",
        scrub:2,
    }
   })