/* tslint:disable */
/* eslint-disable */
/**
 * WASM Function
 * accepts a game array and checks if
 * either of the players have won, returning 
 * the result where 1 = X, -1 = O and 
 * 0 means no one has won
 * @param {Uint16Array} array
 * @returns {number}
 */
export function check_winner(array: Uint16Array): number;
/**
 * WASM Function
 * @param {Uint16Array} array
 * @param {number} tile
 * @returns {Int32Array | undefined}
 */
export function make_move_wrapper(array: Uint16Array, tile: number): Int32Array | undefined;
/**
 *WASM Function
 * @param {Uint16Array} array
 * @param {number} tile
 * @param {number} difficulty
 * @returns {Int32Array | undefined}
 */
export function ai_turn_wrapper(array: Uint16Array, tile: number, difficulty: number): Int32Array | undefined;
