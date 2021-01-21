import './styles.scss'

export const Button = ({ name, removeCompletedNote }) => {
  return <button type='submit' className='btn' onClick={ () => removeCompletedNote ? removeCompletedNote() : void(0) } >{ name }</button>
}