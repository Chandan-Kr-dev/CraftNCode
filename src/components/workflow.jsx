import React from 'react'
import Workflow1 from '../assets/images/workflow1.jpg'
import Workflow2 from '../assets/images/workflow2.jpg'
import Workflow3 from '../assets/images/workflow3.jpg'
import { image, img } from 'framer-motion/client'

const WorkFlowData = [
  {
    id: 1,
    image: Workflow1,
    Title: 'Detection',
    Description: 'Detects the Language used by User',
  },
  {
    id: 2,
    image: Workflow2,
    Title: 'Translation',
    Description: 'Translates the Language to English',
  },
  {
    id: 3,
    image: Workflow3,
    Title: 'Verification',
    Description: 'Verifies the Fact  from our Server',
  },
]

const WorkFlowCard = ({ image, Title, Description }) => {
  return (
    <div className='workflow-card'>
      <div className='workflow-card-tile'>{Title}</div>
      <div className='workflow-card-description'>{Description}</div>
      <img src={image} className='workflow-card-image'></img>
    </div>

  )
}

const workflow = () => {
  return (
    <div>
      <div className='workflow-heading'>
        <h2 className='text-4xl lg:text-7xl my-4 mt-6 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'>How it Works !</h2>
        <h4 className='text-2xl lg:text-4xl my-2 mt-1 py-2 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'>Detection , Translation , Verification </h4>
        <p>It's a simple 3 Step Process that Enables Seamless Fact-Checking <br></br> Across Borders, Beyond Languages</p>
      </div>
      <div className='workflow-container'>
        {WorkFlowData.map((item) => (
          <WorkFlowCard key={item.id} Title= {item.Title} Description={item.Description} image={item.image} />
        ))}
      </div>
    </div>
  )
}

export default workflow