import React, { Component } from 'react'
import "./Board.css"
import Cell from "./Cell"

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {

    static defaultProps = {
        nrows: 5, 
        ncols: 5,
        chanceLightStartsOn: 50
    }

    constructor(props) {
        super(props)
        // TODO: set initial state
        this.state = {
            hasWon: false, 
            board: [
                [1, 2],
                [3, 4],
                [5, 6]
              ]
        }
    }

    createBoard() {
        let board = []
        // create array of arrays of true/false values
        return board
    }


    flipCellsAround(coord) {
        let { ncols, nrows } = this.props
        let board = this.state.board
        let [x, y] = coord.split('-').map(Number)
        let hasWon = this.state.hasWon

        function flipCell(y, x) {
            // if this coord is on board, flip it
            if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
                board[y][x] = !board[y][x]
            }
        }
        this.setState({board, hasWon})
    }

    render() {
        return(
            <table className='Board'>
                <tbody>
                    <tr>
                        <Cell/>
                    </tr>
                </tbody>
            </table>
        )   
    }
}

export default Board