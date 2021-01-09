import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function Singup() {
  const controller = new ScrollMagic.Controller();
  const heading2 = $(".signup h2");
  const heading4 = $(".signup h4");
  const form = $(".signup form");

  let tl = new TimelineLite();

  tl.from(heading2, 1, {
    y: -30,
    opacity: 0,
  })
    .from(
      heading4,
      0.5,
      {
        y: -20,
        opacity: 0,
      },
      "-=.5",
    )
    .from(
      form,
      1,
      {
        y: 30,
        opacity: 0.5,
      },
      "-=1",
    );

  new ScrollMagic.Scene({
    triggerElement: "#merchandise",
  })
    .setTween(tl)
    .addTo(controller);
}
