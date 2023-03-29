import img from '../../assets/img/Law-1.jpg'
import { useState } from "react"


const Overview = () => {
    const[moreText, SetmoreText] = useState(false)
    return (
        <div>
            <h1 className="overview">Overview of The School Of Law</h1>
            <div className={`border bg-slate-100 m-5 rounded-lg shadow shadow-purple-300 hover:shadow-indigo-500/40`}>
                <div className="md:flex m-5  container">
                    <div className="w-full flex items-center justify-center"><img src={img} className="w-[300px] md:w-[400px] h-[170px] md:h-[250px] md:ml-0 border border-black shadow-xl rounded m-5 " alt="" /></div>
                    <p className="mt-1 pr-5 "><span className="font-black text-[2.5vw] mb-5">
                        Welcome to the <span className="text-oran">College of Law</span>, an esteemed academic institution that offers a wide
                         range of degree programs in Law.
                    </span> <br/> 
                    <span className="md:text-xs text-[2vw]">
                    Welcome to the College of Law! We are dedicated to providing our students with the highest quality legal education and training, preparing them to excel in their careers and make a positive impact in the world. Our curriculum is designed to be cutting-edge and innovative, incorporating the latest legal research and theory.
Our faculty members are leaders in their respective fields, renowned for their scholarship and expertise. They are committed to engaging students in a dynamic learning environment, where they can explore complex legal issues and develop critical thinking skills.
<p className={`${moreText ? "block" : "hidden md:block"} md:m-0 md:p-0`}>We take pride in our strong partnerships with industry leaders, law firms, and government agencies, providing our students with unparalleled access to real-world experiences and networking opportunities. Our emphasis on experiential learning and hands-on training ensures that our students are well-prepared to enter the workforce and make meaningful contributions to the legal profession.
Whether you are interested in pursuing an undergraduate degree in pre-law or a graduate degree in law, our programs are designed to meet your needs. Our rigorous undergraduate curriculum provides a strong foundation in legal theory and practice, while our graduate programs offer advanced training in specialized areas of law.
We invite you to join our community of passionate and dedicated students, faculty, and alumni, and to discover the countless opportunities that await you at the College of Law. </p> <br/>
                            <div className="mb-10 md:mt-0 mt-2">
                            <button onClick={()=>SetmoreText(!moreText)} className="block md:hidden bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-400
                                    duration-500 ">
                                        Read More
                            </button>
                                </div>
                    </span>
                    </p>
                </div>
            </div>
            
        </div>
    )
}






export default Overview



