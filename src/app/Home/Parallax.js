import * as ScrollMagic from "scrollmagic";
import { TimelineLite } from "gsap";

export default function HomeParallax() {
  const controller = new ScrollMagic.Controller();

  let tl = new TimelineLite();

  tl.to("#hero-image", 3, {
    y: -600,
  })
    .to(
      "#hero-logo",
      3,
      {
        y: -400,
      },
      "=-3",
    )
    .to(
      "#hero-social",
      3,
      {
        y: -390,
        opacity: 1,
      },
      "=-3",
    )
    .to(
      ".blur, .hero",
      3,
      {
        top: "0%",
      },
      "=-3",
    );

  new ScrollMagic.Scene({
    triggerElement: "#main-body",
    duration: "100%",
    triggerHook: "onLeave",
  })
    .setPin("#main-body")
    .setTween(tl)
    .addTo(controller);
}
