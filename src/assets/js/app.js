import $ from 'jquery';
window.$ = $;
window.jQuery = $;
import foundation from 'foundation-sites';

// init foundation
$(document).foundation();

import { header } from "../../pages/components/header/header";
import { homebanner } from "../../pages/components/banner/banner";
import { homecarousel } from "../../pages/components/carousel/carousel";

homebanner();
homecarousel();