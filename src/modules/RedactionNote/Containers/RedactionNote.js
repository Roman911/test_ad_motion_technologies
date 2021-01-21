import { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { NoteInput } from "../Components/NoteInput"
import { notesActions, redactionActions } from '../../../redux/actions'

export const RedactionNote = ({ id, title }) => {
  const dispatch = useDispatch()

  const [ newTitle, setNewTitle ] = useState('')

  useEffect(() => {
    setNewTitle(title)
  }, [title])

  const handlerChange = event => {
    setNewTitle( event.target.value )
  }

  const handlerSubmit = () => {
    const data = {
      _id: id,
      title: newTitle
    }
    dispatch(notesActions.redactionNote(data))
    dispatch(redactionActions.hideRedaction())
  }

  return <NoteInput handlerChange={ handlerChange } newTitle={ newTitle } handlerSubmit={ handlerSubmit } />
}