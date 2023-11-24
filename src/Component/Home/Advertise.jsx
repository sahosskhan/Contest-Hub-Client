import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Advertise = () => {
    return (
        <div>

<h1 className="text-center text-5xl mb-8 uppercase font-bold">Your Favorite <span className="text-red-500">Content Creator</span> Is Here</h1>



                <Carousel  autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000} >
                <div>
                    <img src="https://i.ibb.co/5Td7sLS/a2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/YBmMBkW/a1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/RGF37HJ/a3.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/FHntfD8/a4.jpg" />
                </div>
                
            </Carousel> 
        </div>
    );
};

export default Advertise;