// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, FLS } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

// Підключення з node_modules
import tippy from "tippy.js"

// Підключення стилів з src/scss/libs
import "../../scss/libs/tippy.scss"
// Підключення стилів з node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаємо та додаємо в об'єкт модулів
flsModules.tippy = tippy("[data-tippy]", {
  content(reference) {
    let theme = reference.getAttribute("data-tippy") // dark
    let title = reference.getAttribute("data-tippy-title")
    let text = reference.getAttribute("data-tippy-text")

    return `<div class="tippy-block ${theme ? "tippy-block_dark" : ""}">
                <h6 class="tippy-block__title">${title}</h6>
                <p class="tippy-block__text">${text}</p>
            </div>`
  },
  //   content: "Tooltip",
  allowHTML: true,
})
