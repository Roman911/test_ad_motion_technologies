import { Button } from "../../../Components"
import './styles.scss'

export const NoteInput = ({ handlerChange, newTitle, handlerSubmit }) => {
  return <div className='note-input'>
    <input type="text" onChange={ handlerChange } value={ newTitle } />
    <div className='note-input__btn'>
      <Button name='зберегти' removeCompletedNote={ handlerSubmit } />
    </div>
  </div>
}