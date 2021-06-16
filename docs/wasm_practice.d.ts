/* tslint:disable */
/* eslint-disable */
/**
*/
export class Calculator {
  free(): void;
/**
*/
  constructor();
/**
* @returns {number}
*/
  get_number(): number;
/**
*/
  clear(): void;
/**
* @param {number} n
*/
  number(n: number): void;
/**
*/
  plus(): void;
/**
*/
  minus(): void;
/**
*/
  times(): void;
/**
*/
  divide(): void;
/**
*/
  equals(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_calculator_free: (a: number) => void;
  readonly calculator_new: () => number;
  readonly calculator_get_number: (a: number) => number;
  readonly calculator_clear: (a: number) => void;
  readonly calculator_number: (a: number, b: number) => void;
  readonly calculator_plus: (a: number) => void;
  readonly calculator_minus: (a: number) => void;
  readonly calculator_times: (a: number) => void;
  readonly calculator_divide: (a: number) => void;
  readonly calculator_equals: (a: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
