import React, {useEffect, useState} from 'react';
import styles from "@/styles/SimpleInput.module.css";

interface simpleInputInterface {
    value: string,
    mutateValue: (newValue: string) => any,
    type?: string,
    placeHolder: string,
    validationFunc?:(value:string)=>any,
    errorMessage?:string
}

const SimpleInput = ({type,  placeHolder, errorMessage,  value, mutateValue,validationFunc,}: simpleInputInterface) => {

    let [fieldStatus,setFieldStatus]=useState(styles.inputWrapper)
    let [status,mutateStatus]=useState<'failure'|'success'|'simple'>('simple')

    useEffect(()=>{
        switch (status){
            case "success": setFieldStatus(styles.inputWrapper); break;
            case "failure": setFieldStatus(styles.inputWrapperError); break;
            case "simple": setFieldStatus(styles.inputWrapper); break;
        }
    },[status])

    const [inputDisplay, setInputDisplay] = useState(false)
    return (
        <div className={styles.inputContainer}>
            <div className={styles.inputWrapper + ' '+ fieldStatus} onMouseEnter={() => {
                if(!inputDisplay){
                    setInputDisplay(true)
                }
            }} onMouseLeave={() => {
                if (value == '') {
                    setInputDisplay(false)
                    mutateStatus('simple')
                }
                else if(validationFunc&&mutateStatus){
                    if(validationFunc(value)==false){
                        mutateStatus('failure');
                    }
                    else{
                        mutateStatus('success');
                    }
                }
            }}>
                {inputDisplay ? <p style={{
                    fontSize: '50%',
                    fontWeight: '400',
                    transition: 'all',
                    transitionDuration: '1000ms',
                    marginTop:'5px'
                }}>{placeHolder}</p> : <p style={{transition: 'all', transitionDuration: '1000ms',marginTop:'5px'}}>{placeHolder}</p>}
                {inputDisplay ? <input type={type} className={styles.textInput} value={value} onChange={(event) => {
                    mutateValue(event.target.value)
                }}/> : null}
                {status=='failure'?<p className={styles.errorMessage}>{errorMessage}</p>:null}
                {status=='success'?<img className={styles.successButton} src={'/images/successStatus.svg'}/>:null}

            </div>
        </div>
    );
};

export default SimpleInput;