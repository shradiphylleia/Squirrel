
gsap.to(".text h1, .text a",{
    color:"white",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:false,
        start:"top 60%",
        end:"top 140%",
        scrub:1
    }
  })
gsap.to("body", {
    backgroundColor: "#171e42",
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      markers:false,
      start:"top 60%",
      end:"top 140%",
      scrub:1
    }
    })


gsap.to("#planet img",{
  scale: 1.5,
  scrollTrigger: {
    trigger: "#planet",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: false
  }
  })