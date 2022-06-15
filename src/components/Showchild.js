import { useContext } from 'react';
import { IndexContext } from '../context';


const Showchild = () => {
  const {data, setData} = useContext(IndexContext);
  return (
    <div>
        <h4>Showchild Component</h4>
        <hr className='m-auto w-25' />
        <p>{data}</p>
        </div>
  )
}

export default Showchild