import React from 'react';
// @ts-ignore
import requestPop from "@/helpers/requestAtom";
import styles from '@/styles/OutlinedButton.module.css'
import {useRecoilState} from "recoil";

interface filledButtonInterface{
    title:string;
    width:string;
    height:string;
    isRequestButton?:boolean
    fontSize?:string;
}

const FilledButton = ({title,width,height,fontSize,isRequestButton}:filledButtonInterface) => {

    const [isPopShown,setIsPopShown]=useRecoilState(requestPop)

    return (
        <button className={styles.buttonOutlined} style={{height:height,width:width,fontSize:fontSize}} onClick={()=>{if(isRequestButton==true){setIsPopShown({isShown:true})}}}>
            {title}
        </button>
    );
};

export default FilledButton;