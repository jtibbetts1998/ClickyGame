import React from "react";
import "./card.css";

function addTotal() {
    var { amountClicked } = this.state.amountClicked;
    this.setState({ amountClicked: amountClicked + 1 });
    console.log(amountClicked);
};

function Card(props) {
    return (
        props.characters.map(char => (
            <button key={char.id} clicked="no" className="button" onClick={addTotal}>
                <div className="No sir">
                    <div className="img-container">
                        <img alt={char.name} src={char.image} />
                    </div>
                </div>
            </button>
        ))
    );
}

export default Card;