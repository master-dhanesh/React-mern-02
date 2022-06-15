import { useContext } from 'react';
import { ContextData } from '../App';

const Showchild = () => {
    const {data, setData} = useContext(ContextData);
  return (
    <div>
        <h4>Showchild Component</h4>
        <hr className='m-auto w-25' />
            <h2>{data}</h2>
        </div>
  )
}

export default Showchild