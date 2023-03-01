import React, {useEffect, useState} from 'react';
import UiInput from "@/components/UI/UiInput";
import styles from "@/styles/Calculator.module.css"
import labelStyle from "@/styles/UiInput.module.css"
import FilledButton from "@/components/UI/FilledButton";


const Calculator = () => {

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

    const [carPrice, setCarPrice] = useState(3000000)
    const [leasingDuration, setLeasingDuration] = useState(12)
    const [firstDonation, setFirstDonation] = useState(10)
    const [procent, setProcent] = useState(10)

    useEffect(()=>{
        if(firstDonation>carPrice){
            setFirstDonation(carPrice*0.75)
        }
    },[carPrice])

    return (
        <div className={styles.calculatorWrapper}>
            <h2>Рассчитайте стоимость <br/> автомобиля в лиззинг</h2>
            <div className={styles.calculatorFields}>
                <UiInput step={25000} label={'Стоимость автомобиля'} minValue={1000000} maxValue={6000000} value={carPrice}
                         mutateValue={setCarPrice}>₽</UiInput>
                <UiInput invert={true} type={'number'} carPrice={carPrice} step={5} label={'Первоначальный взнос'} minValue={10} maxValue={60} value={firstDonation}
                         mutateValue={setFirstDonation} currency={' %'}>
                    {/*<div className={styles.calculatorSubWrapper}>{firstDonation}%</div>*/}
                </UiInput>
                <UiInput  label={'Срок лиззинга'} minValue={1} maxValue={60} value={leasingDuration}
                         mutateValue={setLeasingDuration} props={'мес.'}>мес.</UiInput>
            </div>
            <div className={styles.calculatorResults}>
                <div>
                    <p className={styles.calcLabel}>Сумма договора лизинга</p>
                    <p className={styles.calcResult}>{Math.ceil((carPrice*firstDonation/100)+leasingDuration*(carPrice-((carPrice*firstDonation/100)*(firstDonation/(1+firstDonation-leasingDuration-1))))).toLocaleString()} ₽</p>
                </div>
                <div>
                    <p className={styles.calcLabel}>Ежемесячный платёж от:</p>
                    <p className={styles.calcResult}>{Math.ceil(carPrice-((carPrice*firstDonation/100)*(firstDonation/(1+firstDonation-leasingDuration-1)))).toLocaleString()} ₽</p>
                </div>
                <FilledButton isRequestButton={true} fontSize={'30px'} title={'Оставить заявку'} width={'100%'} height={'69px'}></FilledButton>
            </div>
        </div>
    );
};

export default Calculator;