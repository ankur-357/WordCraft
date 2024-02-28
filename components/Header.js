import React, { useEffect } from "react";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    if (localStorage.getItem('favTheme') === 'fuchsia') { fuchsia() }
    if (localStorage.getItem('favTheme') === 'cyan') { cyan() }
    if (localStorage.getItem('favTheme') === 'rose') { rose() }
    if (localStorage.getItem('favTheme') === 'amber') { amber() }
    if (localStorage.getItem('favTheme') === 'green') { green() }
  }, [])

  function fuchsia() {
    document.documentElement.classList.add('fuchsia')
    document.documentElement.classList.remove('cyan')
    document.documentElement.classList.remove('rose')
    document.documentElement.classList.remove('amber')
    document.documentElement.classList.remove('green')
    localStorage.setItem('favTheme', 'fuchsia')
  }

  function cyan() {
    document.documentElement.classList.add('cyan')
    document.documentElement.classList.remove('fuchsia')
    document.documentElement.classList.remove('rose')
    document.documentElement.classList.remove('amber')
    document.documentElement.classList.remove('green')
    localStorage.setItem('favTheme', 'cyan')
  }

  function rose() {
    document.documentElement.classList.add('rose')
    document.documentElement.classList.remove('cyan')
    document.documentElement.classList.remove('fuchsia')
    document.documentElement.classList.remove('amber')
    document.documentElement.classList.remove('green')
    localStorage.setItem('favTheme', 'rose')
  }

  function amber() {
    document.documentElement.classList.add('amber')
    document.documentElement.classList.remove('cyan')
    document.documentElement.classList.remove('fuchsia')
    document.documentElement.classList.remove('fuchsia')
    document.documentElement.classList.remove('green')
    localStorage.setItem('favTheme', 'amber')
  }

  function green() {
    document.documentElement.classList.add('green')
    document.documentElement.classList.remove('cyan')
    document.documentElement.classList.remove('fuchsia')
    document.documentElement.classList.remove('amber')
    document.documentElement.classList.remove('fuchsia')
    localStorage.setItem('favTheme', 'green')
  }

  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="relative w-80 h-20 mr-2">
          <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute right-4 flex flex-row gap-4 pt-2 md:pt-0">
          <div className="cursor-pointer active:scale-90 p-4 border border-black bg-black-400" onClick={fuchsia}>Fuchsia</div>
          <div className="cursor-pointer active:scale-90 p-4 border border-black bg-black-400" onClick={cyan}>Cyan</div>
          <div className="cursor-pointer active:scale-90 p-4 border border-black bg-black-400" onClick={rose}>Rose</div>
          <div className="cursor-pointer active:scale-90 p-4 border border-black bg-black-400" onClick={amber}>Amber</div>
          <div className="cursor-pointer active:scale-90 p-4 border border-black bg-black-400" onClick={green}>Green</div>
        </div>
      </div>
    </div>
  );
}
