import React from 'react';

import styles from '@/styles/OutlinedButton.module.css'

interface filledButtonInterface{
    title:string;
    width:string;
    height:string;
}

const OutlinedButton = ({title,width,height}:filledButtonInterface) => {
    return (
        <button className={styles.buttonOutlined} style={{height:height,width:width}}>
            {title}
        </button>
    );
};

export default OutlinedButton;