import * as wasm from './wasm_practice_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/
export class Calculator {

    static __wrap(ptr) {
        const obj = Object.create(Calculator.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_calculator_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.calculator_new();
        return Calculator.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get_number() {
        var ret = wasm.calculator_get_number(this.ptr);
        return ret;
    }
    /**
    */
    clear() {
        wasm.calculator_clear(this.ptr);
    }
    /**
    * @param {number} n
    */
    number(n) {
        wasm.calculator_number(this.ptr, n);
    }
    /**
    */
    plus() {
        wasm.calculator_plus(this.ptr);
    }
    /**
    */
    minus() {
        wasm.calculator_minus(this.ptr);
    }
    /**
    */
    times() {
        wasm.calculator_times(this.ptr);
    }
    /**
    */
    divide() {
        wasm.calculator_divide(this.ptr);
    }
    /**
    */
    equals() {
        wasm.calculator_equals(this.ptr);
    }
}

export function __wbg_alert_52140b4ad33edd0b(arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

