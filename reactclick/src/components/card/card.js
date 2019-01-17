import React from "react";
import "./card.css";

const cardStyle = {
    width: '200px',
    height: '200px'
  };

 function addTotal () {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + 1 });
    console.log(amountClicked);
};


function Card(props) {
    return (
        props.Characters.map(char => (
            
            <button key={char.id} clicked="no" className="button" onClick={props.yawn}>
                <div className="Nope" >
                    <div className="img-container"style={(cardStyle)}>
                        <img alt={char.name} src={char.image} />
                        <p>{char.about}</p>
                    </div>
                </div>
            </button>
        ))
    );
}

export default Card;