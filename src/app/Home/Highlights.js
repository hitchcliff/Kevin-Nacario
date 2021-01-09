import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function Highlights() {
  const controller = new ScrollMagic.Controller();

  let tl = new TimelineLite();
  const social = $(".highlights .social");
  const song = $(".highlights .song");

  tl.from(".highlights .heading-2", 1, {
    y: -100,
    opacity: 0,
  })
    .from(
      ".highlights .heading-2-shadow,.highlights .heading-3, .highlights .heading-5",
      0.4,
      {
        y: -30,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      ".highlights .heading-4",
      0.4,
      {
        y: -10,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      ".highlights img, #song-container",
      0.5,
      {
        scale: 0.3,
        opacity: 0,
      },
      "-=.5",
    )

    .staggerFrom(
      [...social, ...song],
      1,
      {
        duration: 1,
        y: 10,
        opacity: 0,
      },
      0.2,
    );

  new ScrollMagic.Scene({
    triggerElement: ".highlights",
    triggerHook: "onCenter",
  })
    .setTween(tl)
    .addTo(controller);
}
