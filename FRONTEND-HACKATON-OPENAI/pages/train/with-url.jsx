import PageLayout from '@/components/core/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Create() {
  const router = useRouter();
  const [userUrl, setUserUrl] = useState('')

  const runTrainWithUrl = async (e) => {
    e.preventDefault();

    const userData = {
      text: userUrl
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
          pathname: "/train/with-url"
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
             <h1 className='text-2xl font-bold'>Entrenar con WebScrapping</h1>
             <form onSubmit={ runTrainWithUrl }>
             <label className='block'>URL</label>
              <input className='outline-none px-2 text-back-dark font-light mb-8 block w-full py-2 rounded-sm bg-back-light' type="text" name="user_url" value={userUrl} onChange={ e => setUserUrl(e.target.value) }/>
              <button type="submit" className='block text-light bg-primary py-4 px-12 mb-16 w-full rounded-md cursor-pointer'>Entrenar</button>
             </form>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
