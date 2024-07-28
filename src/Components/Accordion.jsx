import Accordion from 'react-bootstrap/Accordion';
import './style.css'; // Import your stylesheet

function AllCollapseExample() {
  return (
    <>
    <div className="text-center my-20 text-4xl font-bold">FAQ</div>
    <Accordion>
      
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="0" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>How do I apply for pedalcycle?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
                Interested startups can apply by visiting the PedalStart website and submitting their apllication through the provided channels. 
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="1" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>Who can apply for PedalCircle?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
                Any startup looking to accelerate its growth and gain access to resources, mentorship, and funding can apply. 
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="2" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>How long is PedalCircle program?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
            The program lasts for 4 months.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="3" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>What is innovation hub?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
            A 24/7 accessible workspace where startups can collaboprate, innovate, and work alongside other cohort members.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="4" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>How can PedalCircle help my startup grow?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
By providing mentorship, critical resources, funding, and networking opportunities, PedalCircle aims to accelerate your startup's growth and scalability.            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="5" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>Is there a specific industry focus for PedalCircle?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
            No, startups from all industries are encouraged to apply.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
      <div className="my-3 rounded-full">
        <Accordion.Item eventKey="6" className="accordion-item-grey">
          <Accordion.Header><p className='text-black font-bold text-2xl py-1'>What happens after the program ends?</p></Accordion.Header>
          <Accordion.Body>
            <p className='text-2xl font-bold text-black'>
            Startups will continue to have access to PedalStart's network and resources and can seek further support if needed.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </div>
    </Accordion>
    </>
  );
}

export default AllCollapseExample;
