import React from 'react'
import Offer from './Offer'
import { faUsersGear, faPeopleGroup, faSackDollar, faUniversalAccess, faChalkboardUser,faPeopleLine , faNetworkWired, faCoins} from '@fortawesome/free-solid-svg-icons';
function Offerings() {
    const content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia doloribus reiciendis harum rerum excepturi adipisci esse nihil, eius provident neque!";
  return (
    <div className=' my-80'>
        <div className="text-center">
      <h1 className='text-black text-8xl font-bold inline-block bg-[#06F4F9] px-4 py-6 rounded mt-80'>
        Offerings
      </h1>
      </div>
      <div className='grid grid-cols-3 my-40'>
        <div><Offer title="24/7 Access" content="Gain exclusive access to our innovation hub round the clock for four months, providing you with the space and resources" icon={faUniversalAccess}/></div>
        <div><Offer title="Expert Mentorship" content={content} icon={faChalkboardUser}/></div>
        <div><Offer title="Team Building" content={content} icon={faPeopleGroup}/></div>
        <div><Offer title="Founder Ecosystem" content={content} icon={faPeopleLine}/></div>
        <div><Offer title="Investor Networking" content={content} icon={faNetworkWired}/></div>
        <div><Offer title="Access to Funding" content={content} icon={faCoins}/></div>
      </div>
    </div>
  )
}

export default Offerings
