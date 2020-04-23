import React, { Component } from 'react'
import "./Board.css"
import Cell from "./Cell"


class Board extends Component {
    render() {
        return(
            <div className='App'>
                <Cell />
            </div>
        )   
    }
}

export default Board