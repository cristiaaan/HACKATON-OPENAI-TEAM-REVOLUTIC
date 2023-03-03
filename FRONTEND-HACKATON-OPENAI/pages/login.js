import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
// import Image from 'next/image'

export default function Login(){
  const { data: session } = useSession()

  if (session){
    return(
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <h2 className='text-3xl font-bold mb-8'>Welcome, { session.user.email }</h2>
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <img src={session.user.image} width={128} height={128} alt={ session.user.name} />

        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ () => signOut() }>Sign Out</button>
      </div>
    )
  } else{
    return (
      <>
        <h2 className='text-3xl font-bold mb-8'>You are not signed in.</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={ () => signIn() }>Sign in</button>
      </>
    )
  }

}
