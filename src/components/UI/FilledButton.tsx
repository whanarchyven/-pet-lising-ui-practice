import React from 'react';

import styles from '@/styles/FilledButton.module.css'

interface filledButtonInterface{
    title:string;
    width:string;
    height:string;
}

const FilledButton = ({title,width,height}:filledButtonInterface) => {
    return (
        <button className={styles.buttonFilled} style={{height:height,width:width}}>
            {title}
        </button>
    );
};

export default FilledButton;