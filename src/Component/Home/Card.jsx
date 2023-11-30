

// eslint-disable-next-line react/prop-types
const Card = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const {image,name}=items;
    return (
        <div  data-aos="fade-up">
            <div className="w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={image} alt="avatar"/>

    <div className="py-5 text-center">
        <h1 className="block text-xl font-bold text-gray-800 dark:text-white"  role="link">{name}</h1>
    </div>
</div>
        </div>
    );
};

export default Card;