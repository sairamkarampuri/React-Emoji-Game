// Write your code here.
import './index.css'

const NavBar = props => {
  const {isScoreShow, score, topScore} = props

  const scoresClassName = isScoreShow ? '' : 'display-none'

  return (
    <div className="nav-container">
      <div className="nav-logo-section">
        <img
          className="nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-game-name">Emoji Game</h1>
      </div>
      {isScoreShow ? (
        <div className={`scores-container ${scoresClassName}`}>
          <p className="nav-score">Score: {score}</p>
          <p className="nav-score">Top Score: {topScore}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default NavBar
