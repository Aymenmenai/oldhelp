import * as t from '../types'
// TESTING DATA
    // GUEST
    const defaultData = {

            lang:'english',
    }
const main = (state =defaultData,action)=>{
    // console.log(state,action)
   switch(action.type){
    case t.SET_LANGUAGE:
        return  {...state,lang:action.payload}
    default:
        return {...state}
   }
}

export default main