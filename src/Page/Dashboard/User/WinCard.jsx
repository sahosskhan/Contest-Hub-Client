

// eslint-disable-next-line react/prop-types
const WinCard = ({items}) => {
    // eslint-disable-next-line react/prop-types
    const {nameContest, money, yourName, yourEmail, creatorName,   } =items;
    return (
        <div>
          <section className="max-w-2xl rounded-box shadow-xl px-6 py-8 mx-auto bg-white/50 dark:bg-gray-900">
    <header>
        <div className="flex gap-2">
            <img className="w-auto h-7 sm:h-8" src="https://i.ibb.co/sFTY2DJ/image.png" alt=""/>
            <p className="text-red-500 mt-1 text-xl">Contest Hub</p>
        </div>
    </header>

    <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hi {yourName},</h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
        <span className="text-red-500 text-xl">C</span>ongratulations, Recently You Win  <q className="text-red-500 font-semibold"> {nameContest} </q> Contest Which Is Created By  <span className="font-semibold text-red-500"> <q> {creatorName} </q> </span>. You Win <span className="text-red-500 font-semibold text-lg">{money}</span> $ Price Money As The Reward Of <q className="text-red-500 font-semibold"> {nameContest} </q> Contest.
        </p>
        
        <p className="mt-8 text-gray-600 dark:text-gray-300">
            Thanks, <br/>
            Contest Hub Team
        </p>
    </main>
    

    <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
            Your Participation & Wining Certificate was sent to <a href="#" className="text-red-600 hover:underline" target="_blank">{yourEmail}</a>. 
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">© Contest Hub. All Rights Reserved.</p>
    </footer>
</section>






            
        </div>
    );
};

export default WinCard;