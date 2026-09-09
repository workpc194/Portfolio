import { Plus } from 'lucide-react'

const NavBar = () => {
    return (
        <nav className='w-full h-16 fixed flex items-center z-10 justify-between px-3'>
            <h1 className='text-2xl uppercase select-none font-asgard font-bold tracking-wide'><a href="#">&lt;The_Developer/&gt;</a></h1>
            <div id='nav-icon'><Plus className='transition-transform duration-300 ease-in-out z-3 relative hover:rotate-45' />
                <div id='nav-links' className='w-64 h-full hidden absolute top-[30%] right-9 z-1'>
                    <ul className='w-full flex items-center justify-evenly'>
                        <li className='list-none'><a href="#hero">Home</a></li>
                        <li className='list-none'><a href="#about">About</a></li>
                        <li className='list-none'><a href="#project">Projects</a></li>
                        <li className='list-none'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar