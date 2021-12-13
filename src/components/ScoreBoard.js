
function ScoreBoard(props){
    return(<div className="score-board">
        Score : {props.score} <br></br>
        Best Score : {props.bestScore}
    </div>)
}
export default ScoreBoard;