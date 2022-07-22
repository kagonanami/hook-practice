import React, {useState, useEffect} from 'react';

export default function Click() {
 
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count is now: ', count);
      }, [count]);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>Click me</button>
    </div>
  );
}
