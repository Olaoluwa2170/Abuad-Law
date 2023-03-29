const About = () => {
    return (
        <div className="md:mt-[100px] h-screen bg-[#D6DEED]">
            <div className="md:flex md:pt-10 justify-between">
                <div className="relative">
                    <div className="ml-16">
                        <h1 className="text-[3vw] font-black ml-10 text-primary ">We Teach High level Courses <br/> <span className="text-oran">Engineering</span> School Number One</h1>
                    </div>
                </div>
                <div className="flex text-xs mr-2 text-gray-700 items-center md:mt-0 mt-1 md:p-0 p-5 md:w-2/5 ">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis voluptatem enim quibusdam! Facere reprehenderit sunt est eius deserunt sequi a, ullam corrupti quaerat, necessitatibus nesciunt amet labore ducimus mollitia explicabo?</p>
                </div>        
                </div>
            <div>
                <img className="h-[400px] mt-10 w-full" src={'../../assets/img/lng.jpg'} alt="" />
            </div>

        </div>
    )
}

export default About