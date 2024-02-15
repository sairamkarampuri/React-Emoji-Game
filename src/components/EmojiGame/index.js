// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isPlaying: true,
    selectedEmojisList: [],
    score: 0,
    topScore: 0,
    isWon: false,
  }

  // Shuffling the emojis
  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  // Select the emoji
  selectedEmoji = id => {
    const {emojisList} = this.props
    const {selectedEmojisList} = this.state

    if (selectedEmojisList.includes(id)) {
      this.setState(prevState => ({
        isPlaying: !prevState.isPlaying,
      }))
    } else if (selectedEmojisList.length === emojisList.length - 1) {
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
        score: prevState.score + 1,
        isWon: true,
        isPlaying: false,
      }))
    } else {
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  // Play Again
  playAgain = () => {
    const {score, topScore} = this.state

    if (score > topScore) {
      this.setState(prevState => ({
        isPlaying: !prevState.isPlaying,
        selectedEmojisList: [],
        score: 0,
        isWon: false,
        topScore: prevState.score,
      }))
    } else {
      this.setState(prevState => ({
        isPlaying: !prevState.isPlaying,
        selectedEmojisList: [],
        score: 0,
        isWon: false,
      }))
    }
  }

  render() {
    const {isPlaying, topScore, score, isWon} = this.state
    const shuffledEmojisList = this.shuffledEmojisList()
    const totalScore = shuffledEmojisList.length

    // const score = this.getScore()

    return (
      <div className="bg-container">
        <div className="main-container">
          <NavBar isScoreShow={isPlaying} score={score} topScore={topScore} />
          {isPlaying && (
            <div className="emojis-section">
              <ul className="emojis-container">
                {shuffledEmojisList.map(eachEmoji => (
                  <EmojiCard
                    emojiDetails={eachEmoji}
                    selectedEmoji={this.selectedEmoji}
                    key={eachEmoji.id}
                  />
                ))}
              </ul>
            </div>
          )}
          {!isPlaying && (
            <div className="win-loss-container">
              <WinOrLoseCard
                playAgain={this.playAgain}
                score={score}
                totalScore={totalScore}
                isWon={isWon}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
