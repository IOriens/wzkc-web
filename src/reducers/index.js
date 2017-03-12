import * as Actions from '../actions/index'

const initState = {
  inputText: '', // textarea input
  uploadFlag: 0, // 0=notUpload, 1=uploading, 2=uploadsuccess
  uplpadTime: '',
  itemList: [] // notes
}

function removeItemById (id, arr) {
  if (Array.isArray(arr)) {
    let removeID = -1
    arr.forEach((val, idx) => {
      if (val.time === id) {
        removeID = idx
      }
    })

    let tempArr = arr.slice()
    tempArr.splice(removeID, 1)
    return tempArr
  } else {
    return arr
  }
}

const notes = (state = initState, action) => {
  switch (action.type) {
    case Actions.RESET_INPUT:
      return {
        ...state,
        inputText: ''
      }
    case Actions.UPDATE_TEXT:
      return {
        ...state,
        inputText: action.text,
        uploadFlag: 0
      }
    case Actions.DELETE_ITEM:
      return {
        ...state,
        itemList: removeItemById(action.id, state.itemList)
      }
    case Actions.TEXT_DID_ADD:
      return {
        ...state,
        uploadFlag: 2,
        itemList: [
          ...state.itemList,
          {
            time: state.uplpadTime,
            message: state.inputText
          }
        ]
      }
    case Actions.ADD_TEXT:
      return {
        ...state,
        uploadFlag: 1,
        uplpadTime: new Date().getTime()
      }
    default:
      return state
  }
}

export default notes
