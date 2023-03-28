
import './About.css'

function About() {
    let arrayobj =[{hobbi:"Boostrap", hobbi1:"html", hobbi2:"css" ,hobbi3:"java script" ,hobbi4:"react",hobbi5:"wordpress",hobbi6:"css3"}]
  return ( 
    <div className='h1'>
        <h1>PAL JIVANI</h1>
        <h3>FRONT END</h3>
    
    <>
    {
        arrayobj.map((ele)=>{
            return<div className='flex padding'>
                <h4 >{ele.hobbi}</h4>
                <h4 className='new'>{ele.hobbi1}</h4>
                <h4>{ele.hobbi2}</h4>
                <h4 className='new'>{ele.hobbi3}</h4>
                <h4>{ele.hobbi4}</h4>
                <h4 className='new'>{ele.hobbi5}</h4>
                <h4>{ele.hobbi6}</h4>
            </div>
        })
    }
    </>
    </div>
  )
}

export default About;