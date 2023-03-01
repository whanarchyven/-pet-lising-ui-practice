import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/MainBlock.module.css'
import Navbar from "@/components/Navbar";
import SliderBlock from "@/components/SliderBlock";
import Calculator from "@/components/Calculator";
import {useState} from "react";
import RequestPopUp from "@/components/RequestPopUp";
import {useRecoilState} from "recoil";

import requestPop from "../helpers/requestAtom"

const inter = Inter({subsets: ['latin']})

const links = [
    {
        name: 'О нас',
        href: '/',
        haveSecond: false,
    },
    {
        name: 'Каталог',
        href: '/',
        haveSecond: false,
    },
    {
        name: 'Лизинг',
        href: '/',
        haveSecond: true,
        secondLinks: [
            {
                title: 'Для личного пользования',
                link: '/'
            },
            {
                title: 'Для юридических лиц',
                link: '/'
            },
            {
                title: 'Калькулятор',
                link: '/'
            }
        ]
    },
]


export default function Home() {

    const [isPopShown,setIsPopShown]=useRecoilState(requestPop)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div className={styles.nav}>
                    <div className={styles.subNav}>
                        <Navbar links={links}></Navbar>
                    </div>
                </div>
                <div className={styles.blockWrapper}>
                    <SliderBlock></SliderBlock>
                </div>
                <div>
                    <Calculator></Calculator>
                </div>
                {isPopShown.isShown ? <RequestPopUp togglePop={setIsPopShown}></RequestPopUp> : null}
            </main>
        </>
    )
}
