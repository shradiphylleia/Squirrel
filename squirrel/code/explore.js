gsap.to(".quick-links", {
    backgroundColor: "white",
    duration:0.4,
    delay:1,
    height:"100%",
    width:"100%",
    padding:"10px",
    border:"1px solid black",
    borderRadius:"10px",
    scrollTrigger:{
      trigger:".quick-links",
      scroller:"body",
      markers:false,
      start:"top -8%",
      end:"top -11%",
      scrub:1
    }
    })

    gsap.to(".login",{
        fontFamily: "Lucida Console, Courier New, monospace",
        fontSize:"28px",
        delay:0.4,
        duration:0.5,
        backgroundColor:"white",
        border:"1px solid black",
        borderRadius:"10px",
        padding:"6px",
        height:"30px"
      })