import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { notesActions, redactionActions } from '../../../redux/actions'
import { Note } from "../Components/Note"
import { Button, Loading } from "../../../Components"

export const Notes = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(notesActions.fetchNotes())
  }, [dispatch])
  
  const { notes } = useSelector(state => state.notes)
  const { loading } = useSelector( state => state.loading )
  const { redaction } = useSelector( state => state.redactionNote )

  if (loading) {
    return <Loading />
  }

  if (notes.length === 0) {
    return <p>У вас ще немає нотатків. Створіть сві перший нотаток)</p>
  }

  const removeNote = id => {
    dispatch(notesActions.removeNote(id))
  }

  const completedNote = ({event, completed}) => {
    const { id } = event.target
    const data = { id: id, completed: !completed }
    dispatch(notesActions.completedNote(data))
  }

  const removeCompletedNote = () => {
    dispatch(notesActions.removeNotes())
  }

  const handlerRedaction = (id) => {
    dispatch(redactionActions.showRedaction(id))
  }

  return <>
    {notes.map((item, index) => {
      return <Note
        key={ index }
        item={ item }
        removeNote={ removeNote }
        redaction={ redaction }
        completedNote={ completedNote }
        handlerRedaction={ handlerRedaction }
      />
    })}
    <div className='taend'>
      <Button name='Видалити вибранні' removeCompletedNote={ removeCompletedNote } />
    </div>
  </>
}