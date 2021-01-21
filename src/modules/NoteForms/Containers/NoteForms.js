import { useState } from "react"
import { useDispatch } from 'react-redux'
import { Forms } from "../Components/Forms"
import { notesActions } from '../../../redux/actions'

export const NoteForms = () => {
  const dispatch = useDispatch()
  const [ title, setTitle ] = useState('')
  const [ focus, setFocus ] = useState(false)
  const [ showError, setShowError ] = useState(false)

  const submitHandler = event => {
    event.preventDefault()

    if (!title.trim()) {
      return setShowError(true)
    }

    const newNote = {
      title: title, id: Date.now(), completed: false
    }

    dispatch(notesActions.createNote(newNote))

    setTitle('')
    setShowError(false)
  }

  const handleFocus = () => {
    setFocus(prev => !prev)
  }

  const handlerBlur = event => {
    setFocus(prev => !prev)
  }

  const handlerChange = event => {
    setTitle( event.target.value )
  }

  return <Forms
    title={ title }
    focus={ focus }
    submitHandler={ submitHandler }
    handleFocus={ handleFocus }
    handlerBlur={ handlerBlur }
    handlerChange={ handlerChange }
    showError={ showError }
  />
}