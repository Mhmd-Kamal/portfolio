import Image from 'next/image';
import { useState } from 'react';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const sections = ['home', 'about', 'projects', 'contact'];

  return (
    <nav className='flex items-center justify-between w-full px-4 h-16 text-[#333] sm:shadow-lg'>
      <div className='flex items-center gap-2'>
        <Image src={'/man.png'} alt='Avatar' width={40} height={40} />
        <p className='font-bold tracking-wide '>MOHAMED KAMAL</p>
      </div>

      <button
        className='cursor-pointer sm:hidden'
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-7 h-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        )}
      </button>
      <ul
        className={`${
          showMenu
            ? 'opacity-100'
            : 'opacity-0 invisible sm:opacity-100 sm:visible'
        } transition-all duration-500 flex flex-col sm:flex-row absolute sm:static inset-x-0 top-16 shadow-lg sm:shadow-none sm:border-none`}
      >
        {sections.map((section) => (
          <li className='cursor-pointer px-5 py-6 text-sm font-bold text-right border-t-[1px] border-[#eee]'>
            <a className='uppercase' href={`#${section}`}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
