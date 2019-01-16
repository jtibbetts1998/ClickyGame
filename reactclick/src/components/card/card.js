import React from "react";
import "./card.css";

function addTotal() {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + 1 });
    console.log(amountClicked);
};

const cardStyle = {
    width: '200px',
    height: '200px'
  };

function Card(props) {
    return (
        props.Characters.map(char => (
            
            <button key={char.id} clicked="no" className="button" onClick={addTotal}>
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