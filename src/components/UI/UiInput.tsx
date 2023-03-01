import React, {useEffect, useState} from 'react';
import styles from '@/styles/UiInput.module.css'

import subwrapper from '@/styles/Calculator.module.css'


const stringFormat=(num:number)=>{

    if(num<1000){
        return num
    }

    let resultTemp=num.toString()
    let result=[]
    let index=resultTemp.length-1;
    while (index>2){
        result.push(resultTemp[index-2]+resultTemp[index-1]+resultTemp[index])
        index=index-3;
    }
    let resultString=resultTemp.slice(0,index)
    if(resultString==''){
        resultString=resultTemp[0]
    }
    console.log(num,index,result,resultString)
    if(resultString===undefined){
        resultString=''
    }
    let iterations=result.length
    for(let i=0;i<iterations;i++){
        resultString+=' '+result.pop()
    }
    return resultString
}

const UiInput = (props:any) => {

    const [numToStr,setNumToStr]=useState(props.value.toLocaleString())

    useEffect(()=>{
        setNumToStr(props.value.toLocaleString())
    },[props.value])

    let currency=!props.currency?'':props.currency

    if(props.invert==true){
        return (
            <div className={styles.inputContainer}>
                <p className={styles.inputContainerLabel}>{props.label}</p>
                <div className={styles.inputWrapper}>
                    <p>{props.carPrice*props.value/100}</p>
                    <div className={subwrapper.calculatorSubWrapper}>
                        <input type={props.type} min={props.minValue} max={props.maxValue} value={numToStr} onChange={(event)=>{props.mutateValue(Number(event.target.value.replace(/\D/g,'')))}}/><span>{currency}</span>
                    </div>
                    {/*<div>{props.children}</div>*/}
                    <input type={"range"} step={props.step} className={styles.rangeInput} min={props.minValue} max={props.maxValue} value={props.value} onChange={(event)=>{props.mutateValue(Number(event.target.value.replace(/\D/g,'')))}}/>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className={styles.inputContainer}>
                <p className={styles.inputContainerLabel}>{props.label}</p>
                <div className={styles.inputWrapper}>
                    <input type={props.type} className={styles.textInput} min={props.minValue} max={props.maxValue} value={numToStr+currency} onChange={(event)=>{props.mutateValue(Number(event.target.value.replace(/\D/g,'')))}}/>
                    <div>{props.children}</div>
                    <input type={"range"} step={props.step} className={styles.rangeInput} min={props.minValue} max={props.maxValue} value={props.value} onChange={(event)=>{props.mutateValue(Number(event.target.value.replace(/\D/g,'')))}}/>
                </div>
            </div>
        );
    }
};

export default UiInput;