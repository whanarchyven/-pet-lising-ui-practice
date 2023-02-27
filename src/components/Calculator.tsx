import React, {useState} from 'react';
import UiInput from "@/components/UI/UiInput";
import styles from "@/styles/Calculator.module.css"

const Calculator = () => {

    const [carPrice,setCarPrice]=useState(200000)
    const [leasingDuration,setLeasingDuration]=useState(12)
    const [firstDonation, setFirstDonation]=useState(50000)

    return (
        <div className={styles.calculatorWrapper}>
            <h2>Рассчитайте стоимость <br/> автомобиля в лиззинг</h2>
            <div className={styles.calculatorFields}>
                <UiInput label={'Стоимость автомобиля'} minValue={100000} maxValue={10000000} value={carPrice} mutateValue={setCarPrice} props={'Р'}></UiInput>
                <UiInput label={'Первоначальный взнос'} minValue={0} maxValue={5000000} value={firstDonation} mutateValue={setFirstDonation} props={'Р'}></UiInput>
                <UiInput label={'Срок лиззинга'} minValue={1} maxValue={72} value={leasingDuration} mutateValue={setLeasingDuration} props={'мес.'}></UiInput>
            </div>
        </div>
    );
};

export default Calculator;