import menu from "./menu.json";
import template from "./menu.hbs";

const menuBox = document.querySelector(".js-menu")

function createMenu (menu) {
    return menu.map(template).join("")
}

menuBox.insertAdjacentHTML("beforeend", createMenu(menu))