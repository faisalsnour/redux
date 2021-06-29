import React from 'react'
import { buyCake } from '../redux'
// to connet state to react component, we use connect
import { connect } from 'react-redux'


function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakess - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

// function that takes state as parameter and return object - to get redux state 
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
