import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faPen, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { RedactionNote } from '../../'
import './styles.scss'

export const Note = ({ item, removeNote, completedNote, redaction, handlerRedaction }) => {
  const { id, title, completed } = item

  const checkbox = classNames('row checkbox', { 'active': completed })
  const redactionNote = redaction === id

  return <div className='note row jcsb'>
    <div className='note__right'>
      <label htmlFor={ id } className={ checkbox } >
        <input id={ id } checked={ completed } type="checkbox" onChange={ event => completedNote({event, completed}) } />
        { completed && <FontAwesomeIcon className='checkbox__icon' icon={ faCheck } /> }
      </label>
      { redactionNote ? <RedactionNote title={ title } id={ redaction } /> : <p className='note__title'>{ title }</p> }
    </div>
    <div>
      <span onClick={ () => handlerRedaction(id) }>
        <FontAwesomeIcon className='note__icon' icon={ faPen }/>
      </span>
      <span onClick={ () => removeNote(id) }>
        <FontAwesomeIcon className='note__icon' icon={ faTrashAlt } />
      </span>
    </div>
  </div>
}