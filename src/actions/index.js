/*
 * action types
 */

import Config from 'Config'

export const ADD_TEXT = 'ADD_TEXT'
export const UPDATE_TEXT = 'UPDATE_TEXT'
export const TEXT_DID_ADD = 'TEXT_DID_ADD'
export const DELETE_ITEM = 'DELETE_ITEM'
export const RESET_INPUT = 'RESET_INPUT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

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

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivePosts = json => ({
  type: RECEIVE_POSTS,
  msgs: json
})

export const fetchPosts = userID => dispatch => {
  dispatch(requestPosts())
  return fetch(`${Config.serverURL}/Items`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
}
