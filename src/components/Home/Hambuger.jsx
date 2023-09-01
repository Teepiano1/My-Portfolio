const Hambuger = ({ showHamburg, hamHAndler }) => {
    return (
        <div>
            {showHamburg && (
                <nav className='hamMenu pl-[3rem] fixed w-[100%] text-white text-[1.5rem] cursor-pointer bg-[#2c2c6c]  opacity-90 '>
                    <p><a href='#' className='menu' onClick={hamHAndler}>Home</a></p>
                    <p onClick={hamHAndler}><a href='#About' className='menu'>About</a></p>
                    <p><a href='#Skill' className='menu' onClick={hamHAndler}>Skill</a></p>
                    <p><a href='#Portfolio' className='menu' onClick={hamHAndler}>Portfolio</a></p>
                    <p><a href='#Contact' className='menu' onClick={hamHAndler}>Contact</a></p>
                </nav>
            )}
        </div>
    )
}

export default Hambuger