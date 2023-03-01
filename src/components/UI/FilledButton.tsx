import React from 'react';
// @ts-ignore
import requestPop from "@/helpers/requestAtom";
import styles from '@/styles/FilledButton.module.css'
import {useRecoilState} from "recoil";

interface filledButtonInterface{
    title:string;
    width:string;
    height:string;
    isRequestButton?:boolean
    fontSize?:string;
    type?:'button'|'submit'
}

const FilledButton = ({title,width,height,fontSize,isRequestButton,type}:filledButtonInterface) => {

    const [isPopShown,setIsPopShown]=useRecoilState(requestPop)

    let buttonType=type?type:'button'

    return (
        <button type={buttonType} className={styles.buttonFilled} style={{height:height,width:width,fontSize:fontSize}} onClick={()=>{if(isRequestButton==true){setIsPopShown({isShown:true})}}}>
            {title}
        </button>
    );
};

export default FilledButton;