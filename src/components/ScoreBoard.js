
function ScoreBoard(props){
    return(<div className="score-board">
            <div className="current-score">
                Score : {props.score}
            </div>
            <div className="best-score">
                Best Score : {props.bestScore}
            </div>
    </div>)
}
export default ScoreBoard;