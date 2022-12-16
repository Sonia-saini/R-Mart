import React from 'react'
import { single } from './actionType'
const singleP={
    data:{}
}
function Reducer(state=singleP,{type,payload}) {
 
    switch(type){
        case single:{
            return {
                ...state,
                data:payload
            }
        }
        default:{return state}
    }
}

export default Reducer