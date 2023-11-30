import useAddedContest from "../../Hooks/useAddedContest";
import Winner from "./Winner";

const Advertise = () => {
const {addedContest} = useAddedContest();
console.log(addedContest);
const filter = addedContest.filter(user => user. status == 'approved');
const filter2 = filter.filter(user => user. winingStatus == 'winner');
console.log(filter2);
    
if (filter2.length == 0){
    return <div>
        <h1 className="text-4xl text-center text-red-500">There Is No Winner Whow Win Contest</h1>
    </div>
 }



    return (
        <div className="my-16">
                   <h1 className="text-center text-5xl mb-8 uppercase font-bold">Our <span className="text-red-500">Contest Winner</span> What He Say <span className="text-red-500">?</span></h1>  

                   <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
{filter2?.map((items) => (
    <Winner key={items} items={items}></Winner>
  ))}
</div>

        </div>
            
    
    );
};

export default Advertise;