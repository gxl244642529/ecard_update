import *as types from './ActionTypes'

export function decrement(){
  return{
    type:types.DECREMENT,
  }
}
export function increment(){
  return{
    type:types.INCREMENT,
  }
}
