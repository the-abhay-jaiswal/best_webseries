import React from 'react';
import Card from './Cards';
import Sdata from './Sdatas';

const App = () => (
    <>
    <h1 className='heading'>NETFLIX TOP SHOWS</h1>
    <div className='container'>
    {Sdata.map((val) => {
      return(
        <Card 
        key = {val.id}
        imgsrc = {val.imgsrc}
        sname = {val.sname}
        link = {val.link}
      />
      );
    })}
    </div>
    <br></br>
    <div className='botom'>
        <p>These are my favourite shows</p>
        <h4>&#169; 2023 Abhay Jaiswal, All Rights Reserved</h4>
    </div>
  </>
);

export default App;