mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);

    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

pub enum Operator {
    None,
    Plus,
    Minus,
    Times,
    Divide,
}

#[wasm_bindgen]
pub struct Calculator {
    saved_number: i32,
    number: i32,  // displayed number
    operator: Operator,
}

#[wasm_bindgen]
impl Calculator {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Calculator {
        Calculator {
            saved_number: 0,
            number: 0,
            operator: Operator::None,
        }
    }

    pub fn get_number(&self) -> i32 {
        self.number
    }

    pub fn clear(&mut self) {
        self.number = 0;
        self.operator = Operator::None;
    }

    pub fn number(&mut self, n: i32) {
        self.number = 10 * self.number + n;
    }

    pub fn plus(&mut self) {
        self.resolve_saved_number();
        self.operator = Operator::Plus;
        self.saved_number = self.number;
        self.number = 0;
    }

    pub fn minus(&mut self) {
        self.resolve_saved_number();
        self.operator = Operator::Minus;
        self.saved_number = self.number;
        self.number = 0;
    }

    pub fn times(&mut self) {
        self.resolve_saved_number();
        self.operator = Operator::Times;
        self.saved_number = self.number;
        self.number = 0;
    }

    pub fn divide(&mut self) {
        self.resolve_saved_number();
        self.operator = Operator::Divide;
        self.saved_number = self.number;
        self.number = 0;
    }

    fn resolve_saved_number(&mut self) {
        match self.operator {
            Operator::Plus => {self.number = self.saved_number + self.number; }
            Operator::Minus => {self.number = self.saved_number - self.number; }
            Operator::Times => {self.number = self.saved_number * self.number; }
            Operator::Divide => {
                if (self.number == 0) {
                    alert("Plz no!")
                } else {
                    self.number = self.saved_number / self.number;
                }
            }
            Operator::None => {}
        }
        self.saved_number = 0;
        self.operator = Operator::None;
    }

    pub fn equals(&mut self) {
        self.resolve_saved_number();
    }
}
