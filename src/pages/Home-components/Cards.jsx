import img1 from '../../assets/img/download.jfif' 
import img2 from '../../assets/img/International-Law.jpg'
import img3 from '../../assets/img/constitutional.jpg'
import img4 from '../../assets/img/commercial-and-corporate-law.jpg'
import img5 from '../../assets/img/Environmental_Law.jpeg.jpg'
import img6 from '../../assets/img/Administrative-Law.webp'
import screw1 from '../../assets/icons/criminal.svg'
import screw2 from '../../assets/icons/international-law.svg'
import screw3 from '../../assets/icons/constitution.svg'
import screw4 from '../../assets/icons/commercial-and-corporate-law.svg'
import screw5 from '../../assets/icons/environment-sprout.svg'
import screw6 from '../../assets/icons/admin.svg'

export const listCourse = [
    {
        Header : 'CRIMINAL LAW',
        text : 'This type of law deals with crimes and the punishments that are associated with them, such as imprisonment, fines, and community service.',
        text2: ' '

    },{
        Header : 'INTERNATIONAL LAW',
        text : 'International law governs the relationships between nations, including issues such as trade, diplomacy, and human rights.',
        text2: ' '
    },{
        Header : 'CONSTITUTIONAL LAW',
        text : "This type of law focuses on the interpretation and application of a country's constitution, including the rights and responsibilities of citizens, the limits of government power,",
        text2: 'and the structure and function of government.'
    },{
        Header : 'COMMERCIAL LAW',
        text : 'This type of law pertains to the protection of creative works, such as patents, trademarks, and copyrights. ',
        text2: ' '
    },{
        Header : 'Environmental law',
        text : 'This type of law deals with the protection and conservation of natural resources, such as air,',
        text2: 'water, and land, and the regulation of industries that may affect these resources.'
    },{
        Header : 'Administrative law',
        text : 'This type of law governs the activities of administrative agencies, such as those responsible for regulating industries,',
        text2: ' issuing permits, and enforcing laws.'
    }
]

export const Card = () => {
    return(<div id="courses" className="grid grid-cols-1 md:grid-cols-3 gap-20 ">
                <CourseBox Header={listCourse[0].Header} text={listCourse[0].text} text2={listCourse[0].text2} img={img1} screw={screw1} />
                <CourseBox Header={listCourse[1].Header} text={listCourse[1].text} text2={listCourse[1].text2} img={img2} screw={screw2}/>
                <CourseBox Header={listCourse[2].Header} text={listCourse[2].text} text2={listCourse[2].text2} img={img3} screw={screw3}/>
                <CourseBox Header={listCourse[3].Header} text={listCourse[3].text} text2={listCourse[3].text2} img={img4} screw={screw4}/>
                <CourseBox Header={listCourse[4].Header} text={listCourse[4].text} text2={listCourse[4].text2} img={img5} screw={screw5}/>
                <CourseBox Header={listCourse[5].Header} text={listCourse[5].text} text2={listCourse[5].text2} img={img6} screw={screw6}/>
                
    </div>)}

    const CourseBox = ({Header, text, text2, img, screw}) => {return(
        <div className="box">
                <div className='relative h-[100%]'>
                    <img src={img} className="h-[250px] w-full rounded-t-lg" alt="" />
                    <div className="absolute hidden md:block md:bottom-44 left-[176px] md:left-36">
                        <div className="w-20 h-20 relative rounded-full bg-slate-100 "><img src={screw} className='w-10 absolute ml-5 mt-5 ' alt="" /></div>
                    </div>
                    <div className=' w-full flex-col text-center'>
                        <h1 className='font-black md:text-[1.5vw] mt-10'>{Header}</h1>
                        <p className='text-sm mt-2 m-2 mb-5'>{text}<br/>{text2}</p>
                    </div>
                </div>
                                                                
        </div>) }   


 