import { Button } from 'antd'
import { useState, useEffect } from 'react'
import '../Home/tolu.css'
import MYIMG from '../Home/asset/main.jpg'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Portfolio from '../Porfolio/Portfolio'
import Contact from '../Contact/Contact'
import { Footer } from 'antd/es/layout/layout'
import Hamburger from './asset/ham.jpg'
import Hambuger from './Hambuger'
import TypingAnimate from '../TypingAnimate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import {RxDoubleArrowDown} from 'react-icons/rx'

const Home = () => {
    const [showHamburg, setShowHamburg] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const hamHAndler = () => {

        setShowHamburg(!showHamburg)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }
    return (
        <div className=' h-[100vh]'>
            <nav className={`${showNav ? 'visible' : 'hidden'} animate fixed mt-[0] w-[100%] z-10 flex justify-around h-[4rem] nav bg-[#2c2c6c] shadow-sm pr-[3rem]`} >
                <div className='brand w-[100%] mt-1 text-[2rem] leading-[3.5rem] font-bold'><div className=' logo text-[#4db5ff] pl-[3rem] max-w-[4rem]'> Teepee<span className='text-white'>tech</span></div>
                    <Hambuger showHamburg={showHamburg} hamHAndler={hamHAndler} />
                </div>
                <div className=' brandy flex mt-4 pr-[8rem]'>

                    <a href='#' className='pad'>Home</a>
                    <a href='#About' className='pad'>About</a>
                    <a href='#Skill' className='pad'>Skill</a>
                    <a href='#Portfolio' className='pad'>Portfolio</a>
                    <a href='#Contact' className='pad'>Contact</a>
                </div>
                <div className=' pt-[1rem]'>
                    <img src={Hamburger} onClick={hamHAndler} className='ham hidden rounded-sm max-w-[2.5rem]' alt='Hamburger' />
                </div>
                <Button className=' hirebtn mt-3 animate-pulse ' href='#Contact'>Hire me</Button>
            </nav>


            <div>
                <header className='mainhead h-[100vh] bg-[#2c2c6c]'>

                    <div className='header flex justify-evenly pt-[4rem]'>
                        <Loader type='pacman'/>
                        <img src={MYIMG} alt='tolu' className='myimg mt-[3rem] img w-[28rem] '></img>
                        <h1 className=' h1 mt-[5rem] text-[5rem] leading-[6rem] text-white'><span className=' text-[2rem] animate-ping'>I'm </span><br />
                            OLABODE<br /> TOLULOPE <br />
                            <span className=' text-[2rem]'><TypingAnimate /></span>
                        </h1>
                    </div>
                    <RxDoubleArrowDown className='w-[1.5rem] m-auto animate-bounce text-[#4db5ff]'/>
                </header>
                <About />
                <Skill />
                <Portfolio />
                <Contact />
                <Footer className=' text-center text-[1rem] text-white bg-[#2c2c6c] mt-[10rem]'>
                    <div className='flex justify-center m-auto '>
                        <a href='https://www.linkedin.com/in/tolulope-olabode' target='blank'><FontAwesomeIcon icon={faLinkedin} className=' ml-[0.5rem]' />
                        </a>
                        <a href='https://github.com/Teepiano1' target='blank'><FontAwesomeIcon icon={faGithub} className=' ml-[0.5rem]' />
                        </a>
                    </div>
                    &copy; <span className=' font-medium'>teepeetech2023</span>. All Rights Reserved.
                    Designed by <span className=' font-medium'>Olabode Tolulope</span>
                </Footer>
            </div>
        </div>
    )
}

export default Home