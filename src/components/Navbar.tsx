import React, {useState} from 'react';
import style from "@/styles/Navbar.module.css"
import OutlinedButton from "@/components/UI/OutlinedButton";


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

    return (
        <div className={style.navbar}>
            <div>
                <img src={'/images/logo.svg'} className={style.logoImg}/>
            </div>
            <div className={style.navigation}>
                <div className={style.requestButton}>
                    <OutlinedButton fontSize={'16px'} isRequestButton={true} title={'Оставить заявку'} width={"100%"} height={'48px'}></OutlinedButton>
                </div>
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
                            <a className={style.navbarLink}>
                                {item.name}
                            </a>
                            {showDropMenu&&whichMenuPoint==counter ? <div className={style.dropmenu}>
                                {activeDropMenu?.map((link) => {
                                    return (<a>{link.title}</a>)
                                })}
                            </div> : null}
                        </div>
                    } else {
                        return <a className={style.navbarLink}>
                            {item.name}
                        </a>
                    }
                })}

            </div>
        </div>
    );
};

export default Navbar;