import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModal from './modules/changeModal';
import timer from './modules/timer';
import images from './modules/images';

// скрипты будут выполняться тогда когда DOM структура уже готова
window.addEventListener("DOMContentLoaded", () => {
    "use strict"

    let modalState = {}
    let deadline = "2022-09-20"

    changeModal(modalState)
    modals()
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active")
    tabs(".decoration_slider", ".no_click", ".decoration_content > div > div", "after_click")
    tabs(".balcon_icons", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block")
    forms(modalState)
    timer(".container1", deadline)
    images()
})
