import classNames from "classnames"
import './styles.scss'
import { Button } from "../../../Components"

export const Forms = ({ title, handleFocus, handlerBlur, handlerChange, focus, submitHandler, showError }) => {

  const label = classNames('form__label', { 'active': focus || title.trim() })

  return <div className='form'>
    <form onSubmit={ submitHandler }>
      <>
        <label className={ label } htmlFor='InputNote' >Введіть текст...</label>
        <input className='form__input' type='text' value={ title } id='InputNote' onFocus={ () => handleFocus() } onBlur={ event => handlerBlur(event) } onChange={ event => handlerChange(event) } />
      </>
      { showError && !title.trim() && <p className='form__error'>Нотаток не може бути пустим)</p> }
      <div className='form__button'>
        <Button name='Створити' />
      </div>
    </form>
  </div>
}