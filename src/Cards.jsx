import React from 'react';

function Card(props){
    return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="first" className="card_image"/>
            <div className="card_info">
              <h3 className="card_title">{props.sname}</h3>
              <a href={props.link} target="_blank" rel="noreferrer" >
                <button>Watch</button>
              </a>
            </div>
        </div>
      </div>
    </>
  );
  }

  export default Card;