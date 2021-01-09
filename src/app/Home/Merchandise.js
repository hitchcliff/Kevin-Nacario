import * as ScrollMagic from "scrollmagic";
import $ from "jquery";
import { TimelineLite } from "gsap";

export default function Merchandise() {
  const controller = new ScrollMagic.Controller();
  const ads = $("#merchandise .ads");
  const product = $("#merchandise .product-container");

  let tl = new TimelineLite();

  tl.from(ads, 1, {
    x: -200,
    opacity: 0,
  }).from(
    product,
    0.5,
    {
      x: 200,
      opacity: 0,
    },
    "-=.5",
  );

  new ScrollMagic.Scene({
    triggerElement: "#merchandise",
    triggerHook: "onEnter",
  })
    .setTween(tl)
    .addTo(controller);
}
