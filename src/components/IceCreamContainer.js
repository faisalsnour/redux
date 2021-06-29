import React from 'react'
import { buyIceCream } from '../redux'
// to connet state to react component, we use connect
import { connect } from 'react-redux'


function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of ice creams - {props.numOfIceCream}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

// function that takes state as parameter and return object - to get redux state 
const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
