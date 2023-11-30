


// eslint-disable-next-line react/prop-types
const Winner = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const {winnerName, winnerImage, nameContest}=items;
    return (
        <div  data-aos="fade-up">

   

<div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-red-500 rounded-full dark:border-red-400" alt="Testimonial avatar" src={winnerImage}/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{nameContest}</h2>

    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">I am Happy To Win This Contest. I Work Hard For Win This Contest And Now I Am Successfully Win This Contest. I Will Recommend Other To Participate Contest From Here. </p>

    <div className="flex justify-end mt-4">
        <a href="#" className="text-lg font-medium text-red-600 dark:text-red-300"  role="link">{winnerName}</a>
    </div>
</div>

        </div>
    );
};

export default Winner;