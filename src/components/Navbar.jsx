import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'


const navitems=[
  {name:"Home",href:"#hero"},
  {name:"About",href:"#about"},
  {name:"Skills",href:"#skills"},
  {name:"Projects",href:"#projects"},
  {name:"Contact",href:"#contact"},
]

const Navbar = () => {


  const [isscrolled,setscrolled]=useState(false);
  const [ismenuopen,setismenuopen]=useState(true);


  useEffect(()=>{
    const handlescroll=()=>{
      setscrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll",handlescroll);
    return ()=> window.removeEventListener("scroll",handlescroll);

  },[])


  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300 ",
      isscrolled ?"py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"
    )}>

      <div className="container flex items-center justify-between">
        <a className='text-xl font-bold text-primary flex items-center'href='#hero'>
          <span className='relative z-10'>
            
            <span className='text-glow text-foreground'>Priyesh</span>Portfolio
          </span>
        </a>



        {/* desktop nav */}
        <div className='hidden md:flex space-x-8'>
          {navitems.map((item, key)=>(
          <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>{item.name}</a>

          ))}
        </div>


        {/* mobile nav */}

        <button onClick={()=>setismenuopen((prev)=>!prev)} className='md:hidden p-2 text-foreground z-50'
        aria-lable={ismenuopen? "Close Menu":"Open Menu"}
          >
          {ismenuopen ?<Menu  size={24} />: <X size={24}/>}
        </button>
        <div className={cn("fixed inset-0 bg-background/95 backdroup-blue-md z-40 flex flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          ismenuopen ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"
        )}>
        <div className='flex flex-col space-y-8 text-xl'>
          {navitems.map((item, key)=>(
          <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'
          onClick={()=>setismenuopen(false)}
          >{item.name}</a>

          ))}
        </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
