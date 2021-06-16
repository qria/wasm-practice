import init, { Calculator } from "./wasm_practice.js";

async function run() {
    await init();

    // init global calculator object
    const calculator = new Calculator();

    // render calculator number to display
    const renderNumber = () => {
        const number = calculator.get_number();

        // slight flicker for feedback
        const displayInput = document.querySelector("#calculator-display");
        displayInput.value = "";
        setTimeout(() => {
            displayInput.value = number.toString();
        }, 50)
    }

    // register btn onclick events which also renders number
    const setOnClick = (selector, onClick) => {
        document.querySelector(selector).onclick = () => {
            onClick();
            renderNumber();
        };
    }

    setOnClick("#btn-0", () => { calculator.number(0); })
    setOnClick("#btn-1", () => { calculator.number(1); })
    setOnClick("#btn-2", () => { calculator.number(2); })
    setOnClick("#btn-3", () => { calculator.number(3); })
    setOnClick("#btn-4", () => { calculator.number(4); })
    setOnClick("#btn-5", () => { calculator.number(5); })
    setOnClick("#btn-6", () => { calculator.number(6); })
    setOnClick("#btn-7", () => { calculator.number(7); })
    setOnClick("#btn-8", () => { calculator.number(8); })
    setOnClick("#btn-9", () => { calculator.number(9); })

    setOnClick("#btn-clear", () => { calculator.clear(); })

    setOnClick("#btn-plus", () => { calculator.plus(); })
    setOnClick("#btn-minus", () => { calculator.minus(); })
    setOnClick("#btn-times", () => { calculator.times(); })
    setOnClick("#btn-divide", () => { calculator.divide(); })

    setOnClick("#btn-equals", () => { calculator.equals(); })
}

run();