import  { useEffect, useState } from "react";

const Time = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const deadLine = "December 10 , 2023";

  const getTime = (deadLine) => {
    const time = Date.parse(deadLine) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadLine), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
 
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max  md:ml-60 text-white">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":days}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":hours}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":mins}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":seconds}}></span>
    </span>
    sec
  </div>
</div>
  );
};

export default Time;
