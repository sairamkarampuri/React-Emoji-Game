// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, selectedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onSelectEmoji = () => {
    selectedEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button className="emoji-button" type="button" onClick={onSelectEmoji}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
