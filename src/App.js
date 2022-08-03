import React ,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getApi } from './lib/Redux/Action/Action';
import { GET_API } from './lib/Redux/Actiontype';
const App = () => {
  const dispatch=useDispatch();
  useEffect(() => {
  dispatch(getApi());
   
  }, [])
  return (
    <div>
     <h1>hello</h1>
     </div>
  )
}

export default App
