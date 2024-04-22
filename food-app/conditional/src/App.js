import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Avatar from './avatar';


const Userdata = () => {

  const [isuser, setIsuser] = useState(true)
  return (<>
    <div>
      {isuser ? <h1>welcome to Conditional rendering</h1> : <h1>Not valid user</h1>}
    </div>

    <div>
      {setIsuser(true) ? <h1>Suuccessfully done set user</h1> : <h1>error</h1>}
    </div>
  </>
  )


}

//
function App() {
  return (
    <>
      {/* ternary ? expression1 : expression2 */}
      {/* {Userdata()} */}

      <Avatar />


    </>
  );
}

export default App;
