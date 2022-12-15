import { urlFor } from '../sanity';
import { SanityEvent } from '../typings';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';
import { motion } from 'framer-motion';

type EventProps = {
  events: SanityEvent[]
}

function Events({events}: EventProps) {

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider?.scrollBy(-500, 0);
  }

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider?.scrollBy(500, 0);
  }

  return(
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='etkinlikler' className="pt-24  bg-black w-auto"  >
      <h1 className='text-3xl text-center font-mono font-semibold mb-16'>Etkinlikler</h1>    
          <div className="relative flex items-center ">
            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft}
             size={40} />
            <div id='slider' className='w-full h-full overflow-x-hidden scroll 
            whitespace-nowrap scroll-smooth ' >
              {events.map((event) => (
                  <img
                  className="inline-block p-2 cursor-pointer object-cover  w-1/2 h-96"
                  src={urlFor(event?.image).url()} />   ))}
            </div>
            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight}
             size={40}  />
          </div>
    </motion.div>
  );
}

export default Events;








    
      
  