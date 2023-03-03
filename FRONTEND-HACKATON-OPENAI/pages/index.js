import PageLayout from '@/components/core/PageLayout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const homeAssets = require.context('../assets/home/', true )

  return (
    <>
      <PageLayout>
        <div className=''>
          <div className="text-dark font-poppins">
            <section data-aos="fade-down" className={`page-container min-h-screen hero m-auto py-20`}>
              <div className="grid md:grid-cols-2 grid-flow-cols-1 gap-8">
                <div className="">
                  <Image src={ homeAssets('./chatbot.png') } />
                </div>
                <div className="">
                  <h1 className="lg:text-6xl text-5xl py-4 font-bold" style={{ lineHeight: "1.3" }}>Create custom chatbots</h1>
                  <p className='text-xl text-back-dark'>100% automatic</p>
                </div>
              </div>
              <Link className='my-20 bg-primary hover:bg-primary-light py-4 justify-center rounded-full text-light hover:text-light flex' href="/dashboard">Start creating your Chatbot
</Link>
            </section>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
