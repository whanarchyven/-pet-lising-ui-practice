import React, {useState} from 'react';
import style from "@/styles/Navbar.module.css"
import OutlinedButton from "@/components/UI/OutlinedButton";
import FilledButton from "@/components/UI/FilledButton";


interface navbarInterface {
    links: Array<{
        name: string,
        href: string,
        haveSecond: boolean,
        secondLinks?: Array<{
            title?: string,
            link?: string
        }>
    }>
}

const Navbar = ({links}: navbarInterface) => {

    const [showDropMenu, setShowDropMenu] = useState(false)

    const [whichMenuPoint,setWhichMenuPoint]=useState(0)

    const [activeDropMenu, setActiveDropMenu] = useState<Array<{
        title?: string,
        link?: string
    }>>([])

    const [isSideOpen,setIsSideOpen]=useState(false)

    const [sideAnimation,setSideAnimation]=useState(style.animateFadeInLeft)

    return (
        <div className={style.navbar}>
            <img src={'/images/logo.svg'} className={style.logoImg}/>
            <img src={'/images/logo_mobile.svg'} className={style.logoMobileImg}/>
            <div className={style.navigation}>
                <div className={style.requestButton}>
                    <OutlinedButton fontSize={'16px'} isRequestButton={true} title={'Оставить заявку'} width={"100%"} height={'48px'}></OutlinedButton>
                </div>
                <img className={style.burgerIconWhite} src={'/images/burger_icon_white.svg'} onClick={()=>{setIsSideOpen(true);setSideAnimation(style.animateFadeInLeft)}}/>
                <img className={style.burgerIcon} src={'/images/burger_icon.svg'} onClick={()=>{setIsSideOpen(true);setSideAnimation(style.animateFadeInLeft)}}/>
                {links.map((item,counter) => {
                    if (item.haveSecond) {
                        return <div className={style.secondLinkContainer} onMouseEnter={() => {
                            setShowDropMenu(true);
                            if (item.secondLinks != undefined) {
                                setActiveDropMenu(item.secondLinks)
                                setWhichMenuPoint(counter)
                            }
                        }} onMouseLeave={() => {
                            setShowDropMenu(false)
                        }}>
                            <a className={style.navbarLink} href={item.name}>
                                {item.name}
                            </a>
                            {showDropMenu&&whichMenuPoint==counter ? <div className={style.dropmenu}>
                                {activeDropMenu?.map((link) => {
                                    return (<a href={link.link}>{link.title}</a>)
                                })}
                            </div> : null}
                        </div>
                    } else {
                        return <a className={style.navbarLink} href={item.name}>
                            {item.name}
                        </a>
                    }
                })}

            </div>
            {isSideOpen?<div className={style.sideMenu}>
                <div className={style.sideMenuContent +' '+sideAnimation}>
                    <img src={'/images/closeIconSide.svg'} className={style.sideMenuClose} onClick={()=>{setSideAnimation(style.animateFadeInRight);setTimeout(()=>{setIsSideOpen(false);},1000)}}/>
                    <div className={style.sideMenuLinks}>
                        {links.map((item)=>{return <a className={style.sideMenuLink} href={item.href}>
                            {item.name}
                        </a>})}
                    </div>
                    <div className={style.sideMenuButton}>
                        <FilledButton isRequestButton={true} fontSize={'1.3rem'} title={'Отправить заявку'} width={'250px'} height={'48px'}></FilledButton>
                    </div>
                </div>
            </div>:null}
        </div>
    );
};

export default Navbar;