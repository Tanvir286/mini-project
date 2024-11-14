import React from 'react';
import MainDropDown from './component/MainDropDown';
import SubDropDown from './component/SubDropDown';


const App = () => {
  return (
    <div className='container mx-auto'>
       <MainDropDown  dropdown={false} />
       <SubDropDown/>
    </div>
  );
};

export default App;