
import MainTimeline from "../Component/Visualization/MainTimeline";





const Visualization = () => {

    return (
        <div>
               <h1 className="text-center text-5xl text-black mt-12 uppercase font-bold">
        Welcome to Our<span className="text-red-500"> Contest Hub </span>
        Visualization
      </h1>
      <h1 className="text-center text-lg text-black/60 mt-5 mb-12 uppercase font-semibold">
     <q>You Can Check Here Contest Process  <br /> Timeline & Visualization</q>
      </h1>
      <h1 className="text-center text-3xl text-red-500 mb-12 uppercase font-bold"><q>See Contest Process Timeline Algorithm & Visualization</q></h1>
      <MainTimeline/>

   
        </div>
    );
};

export default Visualization;