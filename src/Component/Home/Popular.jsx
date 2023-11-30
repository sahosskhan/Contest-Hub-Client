import useSort from "../../Hooks/useSort";
import ShortCard from "./ShortCard";



const Popular = () => {
  const {SortContest} =useSort()
    return (
        <div>
                   <h1 className="text-center text-5xl mb-8 uppercase font-bold">Our<span className="text-red-500"> Popular Contest</span> Is Here</h1>
                   <div className="grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10">
{SortContest?.map((items) => (
    <ShortCard key={items} items={items}> </ShortCard>
  ))}
</div>
            
            
        </div>
    );
};

export default Popular;