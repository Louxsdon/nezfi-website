import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen '>
    <header>
      <nav className='px-2 md:px-5 py-2 w-full bg-purple-950'>

        <div className="container w-full max-w-6xl mx-auto flex justify-between items-center">
          <div className="brand">

          <a
            className="pointer-events-none flex place-items-center  lg:pointer-events-auto lg:p-0"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
           
            <Image
              src="/nezfi-logo-2.png"
              alt="Vercel Logo"
              className=""
              width={100}
              height={24}
              priority
            />
          </a>
          </div>

        <button className="border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-2 px-3 backdrop-blur-2xl dark:border-neutral-800
         dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
          Get Started
        </button>
        </div>
      </nav>
    </header>
    <main className="h-full container max-w-6xl mx-auto py-24 px-3 md:px-0">
      <div className="space-y-3">
        <Image
          src="/nezpay-logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className='text-4xl md:text-6xl font-black'>Mobile Money <br/> made simple</h1>
        <p>

          The next generation mobile finanace
        </p>
        <button className='mt-8 px-4 py-2 bg-gradient-to-r  from-purple-600 to-sky-500 rounded-md'>Get Started</button>
      </div>
    </main>
    </div>
  )
}
