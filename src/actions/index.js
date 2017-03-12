/*
 * action types
 */

export const ADD_TEXT = 'ADD_TEXT'
export const UPDATE_TEXT = 'UPDATE_TEXT'
export const TEXT_DID_ADD = 'TEXT_DID_ADD'
export const DELETE_ITEM = 'DELETE_ITEM'
export const RESET_INPUT = 'RESET_INPUT'

/*
 * other constants
 */

/*
 * action creators
 */

export function updateTEXT (text) {
  return {type: UPDATE_TEXT, text}
}

export function resetInput () {
  return {type: RESET_INPUT}
}

export function addTEXT () {
  return {type: ADD_TEXT}
}

export function textDidAdd (id) {
  return {type: TEXT_DID_ADD, id}
}

export function deleteItem (id) {
  return {type: DELETE_ITEM, id}
}


