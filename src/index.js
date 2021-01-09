import App from "./app/index";
import * as ScrollMagic from "scrollmagic";
import gsap, { TimelineLite } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import "./index.scss";

// images
import "./assets/favicon/favicon.ico";

ScrollMagicPluginGsap(ScrollMagic, TimelineLite);
gsap.registerPlugin(CSSPlugin);

// initialize
App();
