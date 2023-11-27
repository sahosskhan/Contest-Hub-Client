import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
                              <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-2xl text-center">
            <img src="https://i.ibb.co/NWK4LnZ/giphy-gif-cid-6c09b9521zxf4tznvd0bqjjz90cz27ybt54icccc8t7dtjp6-ep-v1-gifs-search-rid-giphy.gif" alt="" />
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
		</div>
    <Link to='/'><button className="btn bg-red-500">Go Back To Home</button></Link>
	</div>
</section>  
        </div>
    );
};

export default Error;