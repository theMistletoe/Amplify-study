import { Authenticator } from '@aws-amplify/ui-react'
import { DataStore, Hub, Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { MemoFormUI, MemoUICollection, NavBar, NoteCreateForm, NoteDetailUI, NoteUICollection, NoteUpdateForm } from './ui-components'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

function App() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  const [selectedNote, setSelectedNote] = useState<any>(undefined)
  const isDesktop: boolean = useMediaQuery({ query: '(min-width: 768px)' })
  const [user, setUser] = useState<any>(null);
  const [customState, setCustomState] = useState<string | null>(null);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch(error) {
      console.error(error);
      console.log("Not signed in");
    }
  };

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data }}) => {
      switch (event) {
        case "signIn":
          setUser(data);
          break;
        case "signOut":
          setUser(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
    //     <>
    //       <NavBar width="100%" marginBottom={'20px'} overrides={{
    //         Create: {
    //           onClick: () => {
    //             setShowCreateModal(true);
    //           }
    //         }
    //       }} />
    //       <div className='container'>
    //         <NoteUICollection type={isDesktop ? "grid" : "list"} overrideItems={({ item }) => {
    //           return {
    //             overrides: {
    //               NoteUI: {
    //                 className: !isDesktop ? 'note-ui-mobile' : '',
    //                 onClick: () => {
    //                   setSelectedNote(item);
    //                 }
    //               },
    //               title: {
    //                 color : 'blue',
    //               },
    //               edit: {
    //                 color: 'green',
    //                 onClick: () => {
    //                   setShowUpdateModal(true);
    //                   setUpdateNote(item);
    //                 }
    //               },
    //             }
    //           }
    //         }} />  
    //       </div>
    //       {showCreateModal && (
    //         <div className='modal'>
    //           <NoteCreateForm />
    //         </div>
    //       )}
    //       {showUpdateModal && (
    //         <div className='modal'>
    //           <NoteUpdateForm note={updateNote} />
    //         </div>
    //       )}
    //       {selectedNote && (
    //         <div className='modal' style={{padding: "1rem", border:0, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
    //           <NoteDetailUI note={selectedNote}/>
    //           <MemoUICollection style={{alignItems: 'center'}} overrideItems={({ item }) => {
    //             return {
    //               overrides: {
    //                 MemoUI: {
    //                   onClick: () => {
    //                     // nop
    //                   },
    //                   overrides: {
    //                     text: item.text,
    //                   }
    //                 },
    //               }
    //             }
    //           }} />
    //           <div style={{marginTop: "3rem"}}>
    //             <MemoFormUI />
    //           </div>
    //         </div>
    //       )}
    //       <div>
    //         <button onClick={async () => {
    //           await DataStore.clear()
    //           signOut && signOut();
    //         }}>SignOut</button>
    //       </div>
    //     </>
    //   )}
    // </Authenticator>
    <div className="App">
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook })}>Open Facebook</button>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Amazon })}>Open Amazon</button>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Apple })}>Open Apple</button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <div>{user?.getUsername()}</div>
    </div>
  )
}

export default App;
