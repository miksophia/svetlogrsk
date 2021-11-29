//----- Библиотеки js -----//
import $ from "jquery";

global.jQuery = $;
global.$ = $;

//----- Основной js -----//
import { swiper } from "./modules/swiper";
import { inputmask } from "./modules/mask-tel";
import { validation } from "./modules/validation";
import { vendors } from "./modules/vendors";
import { pl } from "./modules/pl";
import { calling } from "./modules/calling";
import { upload } from "./modules/upload";
import { modals } from "./modules/modals";





swiper();
inputmask();
validation();
vendors();
pl();
calling();
upload();
modals();