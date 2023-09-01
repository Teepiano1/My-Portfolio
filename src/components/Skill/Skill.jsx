import React from 'react'
import '../Skill/skill.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'

const Experience = () => {
  return (
    <div id='Skill' className='text-center pb-[5rem] pt-[6rem]'>
      <h1 className=' font-bold text-[3rem]'>MY STACK</h1>
      <div className='stage-cube-cont m-[auto] mt-[10rem] mb-[10rem]'>
      <div className='cubespinner'>
          <div className=' face1'>
            <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
          </div>
          <div className=' face2'>
            <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
          </div>
          <div className=' face3'>
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
          </div>
          <div className=' face4'>
            <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
          </div>
          <div className=' face5'>
            <FontAwesomeIcon icon={faNode} color='yellow'/>
          </div>
          <div className=' face6'>
            <FontAwesomeIcon icon={faGithub} color='gray'/>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Experience