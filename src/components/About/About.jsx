import MYIMG2 from '../Home/asset/body.jpg'
import { Button } from 'antd'
import CV from '../Home/asset/Tolulopes cv.pdf'
import '../About/About.css'

const About = () => {

  return (
    <div id='About' className='pt-[7rem]'>
      <h1 className=' text-center text-[3rem] font-bold'>ABOUT ME</h1>
      <section className=' abat flex '>
        <div className='abt'>
          <img src={MYIMG2} alt="tolu" className='AboutImg' />
        </div>
        <div className='abattext ml-[3rem] pt-[2rem] leading-8'>
          I am a frontend engineer and a tech enthusiast whose aim is to create web
          apps that lessen stress, create a competitive market for business owners
          and improve lifestyle for consumers.<br /><br />

          i specialize in creating dynamic and engaging web designs using HTML, CSS, React and Javascript.

          I spend my days (and often nights) painting the Internet canvas with PROJECTS and lines of code, turning zeroes and ones into immersive, interactive experiences.
          From a young age, i have always been fascinated by the power of technology to connect people and bring ideas to life.

          <br />
          <Button className='mt-[1.5rem]' href={CV} target='blank'>Preview CV</Button> <Button className=' mt-3' href='https://wa.me/+2349060603130' target='blank'>Let's talk</Button>

        </div>
      </section>
    </div>
  )
}

export default About