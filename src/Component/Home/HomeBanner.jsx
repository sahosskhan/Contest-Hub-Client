import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button } from '@mui/material';
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';

const HomeBanner = () => {
    return (
        <div>
 <div className="container px-6 py-16  mx-auto">
        <div className="items-center lg:flex ">
            <div className="w-full lg:w-1/2 ">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Unleash Creativity Where<br /> Ideas Come to <span className="text-red-500 ">Life!</span></h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">Welcome to ContestHub, the ultimate destination for creators and innovators! Transform your imagination into reality by participating in exciting contests, connecting with fellow creatives, and showcasing your talents to the world. </p>
                    
                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" className="px-4 py-3 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300" placeholder="Search contest tags. "/>
                  
                     <Button variant="contained" sx={{margin:2, borderRadius:3}} color="error"  endIcon={<CenterFocusWeakIcon />}>Search</Button>
                     
                     
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6  lg:mt-0 lg:w-1/2">
                <img className="w-full h-full lg:max-w-3xl" src="https://i.ibb.co/FbLJSS0/Catalogue-pana-copy.png" alt=""/>
            </div>
        </div>
    </div>
        </div>
    );
};

export default HomeBanner;