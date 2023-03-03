import PageLayout from '@/components/core/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Create() {
  const router = useRouter();
  const [userName, setUserName] = useState('')
  const [userDesc, setUserDesc] = useState('')

const createProject = async (e) => {
  e.preventDefault();

  const userData = {
    name: userName,
    description: userDesc
  };

  console.log(userData)

  try {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      router.push({
        pathname: "/dashboard"
      });
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
  }
}
  

  return (
    <>
      <PageLayout>
        <div className=''>
          <div className="text-dark font-poppins">
            <section data-aos="fade-down" className={`page-container min-h-screen hero m-auto py-20`}>
             <h1 className='text-2xl font-bold'>Crear proyecto</h1>
             <form onSubmit={ createProject }>
              <label className='block'>Nombre</label>
              <input className='outline-none px-2 text-back-dark font-light mb-8 block w-full py-2 rounded-sm' type="text" name="user_name" value={userName} onChange={ e => setUserName(e.target.value) }/>
              <label className='block'>Description</label>
              <input className='outline-none px-2 text-back-dark font-light mb-8 block w-full py-2 rounded-sm' type="text" name="user_desc" value={userDesc} onChange={ e => setUserDesc(e.target.value) }/>
              <button type="submit" className='block text-light bg-primary py-4 px-12 mb-16 w-full rounded-md cursor-pointer'>Crear proyecto</button>
             </form>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
