
import useUser from "../../Hooks/userUser";
import Card from "./Card";


const TopCreator = () => {
    const {userList}=useUser();
    const filter = userList.filter(user => user.role == 'creator');
    console.log(filter)
 if (filter.length == 0){
    return <div>
        <h1 className="text-4xl text-center text-red-500">There Is No Creator</h1>
    </div>
 }

    return (
        <div className="my-16">
           <h1 className="text-center text-5xl mb-8 uppercase font-bold">Our<span className="text-red-500"> Popular Contest</span> Creator Is Here</h1>  
<div className="flex lg:flex-row flex-col justify-center items-center gap-5">
{filter?.map((items) => (
    <Card key={items} items={items}></Card>
  ))}
</div>

        </div>
    );
};

export default TopCreator;