import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Update remaining time every second
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  function calculateRemainingTime() {
    // Set the target date (in 'year-month-date' format)
    const targetDateString = '2023-11-28';
    const targetDate = new Date(targetDateString);
    
    // Get the current date and time
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const difference = targetDate - currentDate;

    // Calculate remaining time in days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Return an object with the remaining time
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Days: {remainingTime.days}</p>
      <p>Hours: {remainingTime.hours}</p>
      <p>Minutes: {remainingTime.minutes}</p>
      <p>Seconds: {remainingTime.seconds}</p>
    </div>
  );
};

export default CountdownTimer;
