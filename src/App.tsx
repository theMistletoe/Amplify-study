import { Authenticator } from '@aws-amplify/ui-react'
import { DataStore } from 'aws-amplify'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { MemoFormUI, MemoUICollection, NavBar, NoteCreateForm, NoteDetailUI, NoteUICollection, NoteUpdateForm } from './ui-components'

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  const [selectedNote, setSelectedNote] = useState<any>(undefined)
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <NavBar width="100%" marginBottom={'20px'} overrides={{
            Create: {
              onClick: () => {
                setShowCreateModal(true);
              }
            }
          }} />
          <div className='container'>
            <NoteUICollection type={isDesktop ? "grid" : "list"} overrideItems={({ item }) => {
              return {
                overrides: {
                  NoteUI: {
                    className: !isDesktop ? 'note-ui-mobile' : '',
                    onClick: () => {
                      setSelectedNote(item);
                    }
                  },
                  title: {
                    color : 'blue',
                  },
                  edit: {
                    color: 'green',
                    onClick: () => {
                      setShowUpdateModal(true);
                      setUpdateNote(item);
                    }
                  },
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
          {selectedNote && (
            <div className='modal' style={{padding: "1rem"}}>
              <NoteDetailUI note={selectedNote}/>
              <MemoUICollection style={{alignItems: 'center'}} overrideItems={({ item }) => {
                return {
                  overrides: {
                    MemoUI: {
                      onClick: () => {
                        // nop
                      },
                      overrides: {
                        text: item.text,
                      }
                    },
                  }
                }
              }} />
              <div style={{marginTop: "3rem"}}>
                <MemoFormUI />
              </div>
            </div>
          )}
          <div>
            <button onClick={async () => {
              await DataStore.clear()
              signOut && signOut();
            }}>SignOut</button>
          </div>
        </>
      )}
    </Authenticator>
  )
}

export default App;
