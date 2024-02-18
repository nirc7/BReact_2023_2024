import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import '../App.css'

function Home() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('effect');
  })

  useEffect(() => {
    console.log('count=', count);
  }, [count])

  useEffect(() => {
    console.log('did mount');

    return () => {
      console.log('unmount');
    }
  }, [])

  const btnGo2UWD = () => {
    let userObj = {
      id: 1,
      name: 'avi'
    };

    navigate('/user',
      { state: userObj });
  }

  console.log('return');
  return (
    <>
      <div className="card">
        <button onClick={btnGo2UWD} >go2UserWithData</button> <br /> <br />

        <button onClick={() => navigate('/about')} >go2About</button> <br /> <br />

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> <br /> <br />
        <button onClick={() => setCount2((count2) => count2 + 2)}>
          count is {count2}
        </button>
      </div>
    </>
  )
}

export default Home

