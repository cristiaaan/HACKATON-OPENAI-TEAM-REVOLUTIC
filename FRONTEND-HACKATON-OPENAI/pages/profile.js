import React from 'react'
import { useSession, signIn, signOut, getSession } from 'next-auth/react'
// import Image from 'next/image'

export default function Profile(){
  const { data: session, status } = useSession()

  if (status === 'authenticated'){
    return(
      <div className="">
        <h1>{session.user.name}</h1>
      </div>
    )
  } else{
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    )
  }

}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if(!session){
    return {
      redirect: {
        destination: '/login'
      }
    }
  }

  return {
    props: { session }
  }
} 
