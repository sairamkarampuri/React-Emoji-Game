// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {playAgain, score, totalScore, isWon} = props
  const onClickPlayAgain = () => {
    playAgain()
  }

  const resultImgUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWon ? 'You Won' : 'You Lose'
  const bestScoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-loss-section">
      <div className="result-section">
        <h1 className="won-or-loss-text">{resultText}</h1>
        <p className="score-level">{bestScoreText}</p>
        <p className="score-to-score">
          {score}/{totalScore}
        </p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="result-img-sectoin">
        <img className="result-img" src={resultImgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
