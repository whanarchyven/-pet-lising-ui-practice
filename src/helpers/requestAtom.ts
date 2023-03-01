import {atom} from "recoil";

const requestPop=atom({
    key:'requestPop',
    default:{
        isShown:false,
    }
})

export default requestPop