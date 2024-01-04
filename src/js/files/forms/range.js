// Підключення з node_modules
import * as noUiSlider from "nouislider"

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import "nouislider/dist/nouislider.css"

export function rangeInit() {
  function generateStepsObject(textFrom, textTo, steps) {
    const stepSize = (textTo - textFrom) / (steps - 1)
    const result = {}

    for (let i = 0; i < steps; i++) {
      const percentage = (i / (steps - 1)) * 100
      const start = textFrom + i * stepSize
      const end = i === steps - 1 ? textTo : start + stepSize

      result[`${percentage === 0 ? "min" : percentage === 100 ? "max" : percentage}`] = [start, end]
    }

    return result
  }

  const priceSliders = document.querySelectorAll("[data-range-parent]")

  if (priceSliders) {
    priceSliders.forEach(parent => {
      let priceSlider = parent.querySelector("[data-range]")
      let input = parent.querySelector("input")

      let textFrom = priceSlider.getAttribute("data-from")
      let textTo = priceSlider.getAttribute("data-to")
      let steps = priceSlider.getAttribute("data-steps")

      const resultObject = generateStepsObject(Number(textFrom), Number(textTo), Number(steps))

      noUiSlider.create(priceSlider, {
        start: Number(textFrom), // [0,200000]
        connect: [true, false],
        step: 1,
        range: resultObject,
        pips: {
          mode: "range",
          density: "none",
        },
      })

      priceSlider.noUiSlider.on("update", function (values, handle) {
        input.value = Math.floor(values[handle])
      })

      input.addEventListener("change", function (e) {
        priceSlider.noUiSlider.set(this.value)
      })
    })
  }
}
window.addEventListener("load", () => {
  rangeInit()
})
