import React, {useCallback, useRef, useState} from 'react';

import styles from '@/styles/SliderBlock.module.css'
import FilledButton from "@/components/UI/FilledButton";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import {Swiper as SwiperType, Navigation,Autoplay} from 'swiper';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

const SliderBlock = () => {
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiperRef = useRef<SwiperType>();
    const countDownTimer=useRef<typeof CountdownCircleTimer>()

    const [activeDuration,setActiveDuration]=useState(15)

    const slides = [
        {
            title: 'Авто в лизинг для физических лиц',
            subtitle: 'Получите машину за 5 дней',
            buttonText: 'Оставить заявку',
            imageUrl: '/images/cars/car1.png'
        },
        {
            title: 'Mercedes W220 S600',
            subtitle: 'Ощути шестилитровую мощь под капотом',
            buttonText: 'Оставить заявку',
            imageUrl: '/images/cars/car1.png'
        },
        {
            title: 'Kia RIO 2022',
            subtitle: 'уверенный комфорт по городу',
            buttonText: 'Беру сегодня !',
            imageUrl: '/images/cars/car1.png'
        }
    ]

    function geSlideDataIndex(swipe:SwiperType){
        var activeIndex = swipe.activeIndex;
        var slidesLen = swipe.slides.length;
        if(swipe.params.loop){
            switch(swipe.activeIndex){
                case 0:
                    activeIndex = slidesLen-3;
                    break;
                case slidesLen-1:
                    activeIndex = 0;
                    break;
                default:
                    --activeIndex;
            }
        }
        return  activeIndex;
    }

    const [activeSlide, setActiveSlide] = useState(slides[0])

    return (
        <div className={styles.sliderWrapper}>
            <div className={styles.sliderTextBlock}>
                <h1>{activeSlide.title}</h1>
                <p>{activeSlide.subtitle}</p>
                <FilledButton fontSize={'16px'} isRequestButton={true} title={activeSlide.buttonText} width={'174px'} height={'48px'}></FilledButton>
            </div>
            <div className={styles.sliderSwiperBlock}>
                <Swiper className="mySwiper" style={{color: "white", height: "100%"}}
                        onSlideChange={(swiper) => {console.log(swiper.realIndex);setActiveSlide(slides[(swiper.realIndex)]);}}
                        modules={[Autoplay]}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        loop={true}
                        speed={1000}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{delay:15000,}}

                >
                    {slides.map((slide => {
                        return <SwiperSlide><img style={{height: "100%"}} src={slide.imageUrl}/></SwiperSlide>
                    }))}
                </Swiper>
                <div className={styles.sliderNavigationButtons}>
                    <button className={styles.sliderPrevButton} onClick={() => {
                        swiperRef.current?.slidePrev()
                        setTimeout(()=>{
                            setActiveDuration(activeDuration+1);
                            swiperRef?.current?.autoplay.start();
                        },1000)
                    }}>
                        <img src={'/images/slidePrev.svg'}/>
                    </button>
                    <button className={styles.sliderNextButton} onClick={() => {
                        swiperRef.current?.slideNext()
                        setTimeout(()=>{
                            setActiveDuration(activeDuration+1);
                            swiperRef?.current?.autoplay.start();
                        },1000)
                    }}>
                        <CountdownCircleTimer onComplete={() => {
                            return {shouldRepeat: true, delay: 1}
                        }} size={50} strokeWidth={3} isPlaying={true} duration={15} key={activeDuration} trailColor={'#4C4C4C'}
                                              colors={'#FFF'}>{({remainingTime}) => <img
                            src={'/images/slideNext.svg'}/>}</CountdownCircleTimer>
                    </button>
                </div>
                <div className={styles.paginationBlock}>
                    {slides.map((item,counter)=>{
                        if(activeSlide.title==item.title){
                            return <div className={styles.paginationDotActive}></div>
                        }
                        else{
                            return <div className={styles.paginationDot}></div>
                        }
                    })}
                </div>
            </div>

        </div>
    );
};

export default SliderBlock;