import React from 'react'
import Quiz from '../Home/asset/quiz.png'
import Sprint from '../Home/asset/sprint.jpg'
import Reg from '../Home/asset/reg.png'
import Store from '../Home/asset/store.png'
import Agecal from '../Home/asset/ageCal.jpg'
import Weather from '../Home/asset/weather.jpg'
import { Button } from 'antd'


const Portfolio = () => {
  return (
  <>
  <h1 id='Portfolio' className=' text-center pt-[3rem] font-bold text-[3rem]'>MY PORTFOLIO</h1>
    <p className=' text-center text-[#4db5ff] pt-[3rem] pb-[1rem]'>Below are some of my projects</p>
    <div className='flex justify-around m-auto gap-[3rem] flex-wrap w-[70%]'>
      <section>
      <img src={Quiz} alt="quiz app" className=' w-[17rem] h-[10rem]'/>
      <p className=' text-center m-[0.5rem]'>Quiz App</p>
      <Button href='https://github.com/Teepiano1/quizApp' target='blank' >View code</Button> <Button href='https://teequizapp.netlify.app' target='blank' >Live demo</Button>
      </section>

      <section>
      <img src={Sprint} alt="math sprint game" className=' w-[16rem] h-[10rem]' />
      <p className=' text-center m-[0.5rem]'>Math Sprint Game</p>
      <Button href='https://github.com/Teepiano1/myMathSprint' target='blank' >View code</Button>  <Button href='https://teemathsprint.netlify.app' target='blank' >Live demo</Button>
      </section>

      <section>
      <img src={Reg} alt="Attendance app"className=' w-[17rem] h-[10rem]' />
      <p className=' text-center m-[0.5rem]'>Attendance App</p>
      <Button href='https://github.com/Teepiano1/Register-App' target='blank' >View code</Button> <Button href='https://teeregisterapp.netlify.app' target='blank' >Live demo</Button>
      </section>

      <section>
      <img src={Store} alt="Store Front"className=' w-[16rem] h-[12rem]' />
      <p className=' text-center m-[0.5rem]'>Store Front</p>
      <Button href='https://github.com/Teepiano1/store-front' target='blank'>View code</Button> <Button href='https://productstee.netlify.app' target='blank' >Live demo</Button>
      </section>

      <section>
      <img src={Agecal} alt="Age calculator"className=' w-[17rem]' />
      <p className=' text-center m-[0.5rem]'>Age Calculator</p>
      <Button href='https://github.com/Teepiano1' target='blank'>View code</Button> <Button href='https://teeagecal.netlify.app' target='blank'>Live demo</Button>
      </section>

      <section>
      <img src={Weather} alt="Weather app"className=' w-[16rem]' />
      <p className=' text-center m-[0.5rem]'>Weather App</p>
      <Button href='https://github.com/Teepiano1/weather' target='blank'>View code</Button> <Button href='https://teeweatherapp.netlify.app' target='blank' >Live demo</Button>
      </section>
      
    </div>
    </>
  )
}

export default Portfolio