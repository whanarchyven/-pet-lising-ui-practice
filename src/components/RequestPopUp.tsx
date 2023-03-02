import React, {useState} from 'react';
import styles from "@/styles/PopUp.module.css"
import SimpleInput from "@/components/UI/SimpleInput";
import FilledButton from "@/components/UI/FilledButton";
import validator from 'validator'
interface requestPopUp{
    togglePop:(prop:any)=>any
}

const RequestPopUp = ({togglePop}:requestPopUp) => {

    const [phoneNumber,setPhoneNumber]=useState('')
    const [clientName,setClientName]=useState('')


    const phoneNumberValidation=(value:string)=>{
        for(let i=0; i<value.length; i++){
            if(value[i]=='_'){
                return false
            }
        }
        return true
    }

    const nameValidation=(value:string)=>{
        function containsNumber(str:string) {
            return /\d/.test(str);
        }

        if(containsNumber(value)){
            return false
        }

        return value.charAt(0)===value.charAt(0).toUpperCase()
    }


    const [animationState,setAnimationState]=useState([styles.popUpFadeIn,styles.popLayoutFadeIn])


    return (
        <div className={styles.popUpWrapper+' '+animationState[1]}>
            <div className={styles.popUpContainer+' '+animationState[0]}>
                <div className={styles.popUpContent}>
                    <h3>Онлайн-заявка</h3>
                    <p>Заполните форму, и мы вскоре свяжемся с вами, чтобы <br/> ответить на все вопросы</p>
                    <div>
                        <form className={styles.popUpInputFields} onSubmit={()=>{alert('submitted')}}>
                            <SimpleInput type={'phoneNumber'} errorMessage={'Номер введён некорректно'} validationFunc={phoneNumberValidation} value={phoneNumber} mutateValue={setPhoneNumber} placeHolder={'Телефон *'} ></SimpleInput>
                            <SimpleInput errorMessage={'Имя введено некорректно'} value={clientName} validationFunc={nameValidation} mutateValue={setClientName} type={'text'} placeHolder={'Имя *'} ></SimpleInput>
                            <div className={styles.popUpWarning}>
                                <p>Нажимая на кнопку «Оставить заявку»,  я даю <br/> <span>согласие на обработку персональных данных</span></p>
                                <FilledButton type={'submit'} title={'Оставить заявку'} width={'174px'} height={'48px'}></FilledButton>
                            </div>
                        </form>
                        <div className={styles.contactsBlock}>
                            <div>
                                <img src={'/images/whatsapp.svg'}/>
                            </div>
                            <div>
                                <img src={'/images/telegram.svg'}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.popUpCloseIcon} onClick={()=>{setAnimationState([styles.popUpFadeOut,styles.popLayoutFadeOut]);setTimeout(()=>{togglePop( false)},1000)}}>
                    <img src={'/images/closeIcon.svg'}/>
                </div>
            </div>
        </div>
    );
};

export default RequestPopUp;