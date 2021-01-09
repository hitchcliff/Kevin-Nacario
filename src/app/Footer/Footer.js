import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function Footer() {
  const controller = new ScrollMagic.Controller();
  const social = $("footer .social");
  const logo = $("footer .hero__logo");
  const copy = $("footer .copy");

  let tl = new TimelineLite();

  tl.staggerFrom(
    social,
    1,
    {
      y: 10,
      opacity: 0,
    },
    0.2,
  ).from(
    [copy, logo],
    1,
    {
      y: -30,
      opacity: 0,
    },
    "-=1",
  );

  new ScrollMagic.Scene({
    triggerElement: "footer",
    triggerHook: "onEnter",
  })
    .setTween(tl)
    .addTo(controller);
}
