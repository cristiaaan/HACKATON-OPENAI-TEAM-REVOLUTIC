import PageLayout from '@/components/core/PageLayout'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'

export default function Create() {
  const router = useRouter();
  const [userText, setUserText] = useState('')
  const [gptResponse, setGptResponse] = useState(null)
  const runTrainWithText = async (e) => {
    e.preventDefault();

    const userData = {
      text: userText
    };

    console.log(userData)


    try {
      const response = await fetch(`http://127.0.0.1:8000/embbeding_corpus`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });

      if (response.ok) {

        //console.log(response);
        const data = await response.json();
        console.log(data);
        setGptResponse(data)
        router.push({
          pathname: "/train/with-text"
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
             <h1 className='text-2xl font-bold'>Train with text</h1>
             <form onSubmit={ runTrainWithText }>
             <label className='block'>Content</label>
              <textarea className='outline-none px-2 text-back-dark font-light mb-8 block w-full py-2 rounded-sm bg-back-light' type="text" name="user_text" value={userText} onChange={ e => setUserText(e.target.value) }/>
              {
                gptResponse && (
                  <div className="">
                    <h3>Response:</h3>
                    <span className='pb-4'> { gptResponse } </span> 
                  </div>
                )
              }
              <br></br>
              <br></br>
              <br></br>
              <button type="submit" className='block text-light bg-primary py-4 px-12 mb-16 w-full rounded-md cursor-pointer'>Training</button>
             </form>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
