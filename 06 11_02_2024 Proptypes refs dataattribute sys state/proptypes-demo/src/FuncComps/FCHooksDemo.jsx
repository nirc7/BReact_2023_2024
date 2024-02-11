import { useState, useEffect } from 'react';

export default function FCHooksDemo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    console.log('count =', count); 
  }, [count])

  useEffect(() => {
    console.log('did mount');

    return () => {
      console.log('will unmount');   
    }
  }, []) 

  useEffect(() => {
    console.log(' some effect');
  })

  console.log('retrun');
  return (
    <div>FCHooksDemo <br />
      <button onClick={() => setCount(prevCount => prevCount + 1)} >counter++</button> <br />
      count={count}
    </div>
  )
}
