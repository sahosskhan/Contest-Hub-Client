/* eslint-disable react/prop-types */
import ContestCard from "./ContestCard";


const ContesTab = ({items}) => {
if (items.length === 0) {
    return <>
  <div className="flex justify-center items-center min-h-screen">
    <h1 className="text-red-500 text-5xl text-center">  There Are No Contest In This Tags</h1>
  </div>
    </>
}

    return (
        <div>
                       <div className="grid lg:grid-cols-2 grid-cols-1   gap-20">
{
    items.map(item=> <ContestCard
    key={item}
    item ={item}
    ></ContestCard> )
}
</div> 
        </div>
    );
};

export default ContesTab;