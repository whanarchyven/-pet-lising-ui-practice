import React from 'react';
import styles from '@/styles/UiInput.module.css'
interface uiInputInterface{
    label:string,
    minValue:number,
    maxValue:number,
    value:number,
    mutateValue:(value:number)=>any,
    props:any
}

const UiInput = ({label,maxValue, minValue, value, mutateValue,props}:uiInputInterface) => {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.inputContainerLabel}>{label}</p>
            <div className={styles.inputWrapper}>
                <input className={styles.textInput} min={minValue} max={maxValue} value={value} onChange={(event)=>{mutateValue(Number(event.target.value))}}/>
                <div>{props}</div>
                <input type={"range"} className={styles.rangeInput} min={minValue} max={maxValue} value={value} onChange={(event)=>{mutateValue(Number(event.target.value))}}/>
            </div>
        </div>
    );
};

export default UiInput;