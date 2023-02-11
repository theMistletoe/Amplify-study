import { useState } from 'react'
import { NavBar, NoteCreateForm, NoteUICollection, NoteUpdateForm } from './ui-components'

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()

  return (
    <>
      <NavBar width="100%" marginBottom={'20px'} overrides={{
        Create: {
          onClick: () => {
            setShowCreateModal(true);
          }
        }
      }} />
      <div className='container'>
        <NoteUICollection overrideItems={({ item }) => {
          return {
            overrides: {
              title: {
                color : 'blue',
                onClick: () => {
                  alert('title clicked');
                }
              },
              edit: {
                color: 'green',
                onClick: () => {
                  alert('edit clicked');
                  setShowUpdateModal(true);
                  setUpdateNote(item);
                }
              }
            }
          }
        }} />  
      </div>
      {showCreateModal && (
        <div className='modal'>
          <NoteCreateForm />
        </div>
      )}
      {showUpdateModal && (
        <div className='modal'>
          <NoteUpdateForm note={updateNote} />
        </div>
      )}
    </>
  )
}

export default App;
