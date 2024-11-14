import { Suspense } from 'react';
import SWR from './Component/SWR';
import './index.css';


const App = () => {
  
  return (
    <div>
 
      {/* This is suspense and swr part  */}
      <Suspense fallback={<h1>Loading Data</h1>}>
          <SWR/>
      </Suspense>
      {/* This is suspense and swr part  */}





    </div>
  );
};

export default App;
