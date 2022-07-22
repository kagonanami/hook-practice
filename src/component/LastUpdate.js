import React, {useState, useEffect} from 'react';

export default function LastUpdate() {

    const [count, setCount] = useState(0)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setTime(new Date())
    }, [count])
    
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Update</button>
      <p>Last updated on {time.toLocaleTimeString()}</p>
    </div>
  );
}
