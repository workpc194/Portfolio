
const Footer = () => {
    return (
        <div id='contact' className='h-screen w-full flex flex-col justify-around mx-10'>
            <h3 className='font-asgard text-8xl pt-36'>Wana book a project?</h3>
            <a href="mailto:nomitool1419@gmail.com"><h4 className="font-montserrat text-5xl mt-10 ">nomitool1419@gmail.com</h4></a>
            <div id="footer" className="w-full pr-10 flex justify-between items-center">
                <a href="#"><h2 className="font-montserrat text-2xl">&copy;noman1419</h2></a>
                <div className="w-xl">
                    <ul className="w-full flex justify-evenly">
                        <li><a className="font-montserrat" href="https://wa.me/923183815505" target="_blank">Whatsapp</a></li>
                        <li><a className="font-montserrat" href="#">Instagram</a></li>
                        <li><a className="font-montserrat" href="#">Facebook</a></li>
                        <li><a className="font-montserrat" href="https://github.com/workpc194" target="_blank">Github</a></li>
                        <li><a className="font-montserrat" href="#">LinkdIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer