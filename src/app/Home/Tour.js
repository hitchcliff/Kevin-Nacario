import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function Tour() {
  const controller = new ScrollMagic.Controller();

  let tl = new TimelineLite();
  const heading2 = $("#tour-section .heading-2");
  const heading2shadow = $("#tour-section .heading-2-shadow");
  const heading4 = $("#tour-section .heading-4");
  const heading6 = $("#tour-section .heading-6");
  const tours = $("#tour-section .tour > div");

  tl.staggerFrom(
    tours,
    1,
    {
      y: 20,
      opacity: 0,
      scale: 0.5,
    },
    0.2,
  )
    .from(
      heading2,
      1,
      {
        y: -100,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      heading2shadow,
      0.4,
      {
        y: -30,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      heading4,
      1,
      {
        x: -20,
        opacity: 0,
      },
      "-=1",
    )
    .from(
      heading6,
      1,
      {
        x: -40,
        opacity: 0,
      },
      "-=.5",
    );

  new ScrollMagic.Scene({
    triggerElement: "#tour-section",
    triggerHook: "onEnter",
  })
    .setTween(tl)
    .addTo(controller);
}
