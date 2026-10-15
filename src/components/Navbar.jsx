import { ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  return (
    <header className='fixed left-0 top-0 z-50 w-full'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10'>

        {/* Logo */}
        <a 
          href="/"
          className='font-heading text-2xl font-bold tracking-tight'
        >
          NOVA<span className='text-neutral-400'>.</span>
        </a>

        {/* Navigation */}
        <div className='hidden items-center gap-8 md:flex'>
          <a 
            href="#work"
            className='text-sm font-medium transition-opacity hover:opacity-50'
          >
            Work
          </a>
           
          <a 
            href="#services"
            className='text-sm font-medium transition-opacity hover:opacity-50'
          >
            Services
          </a>
           
          <a 
            href="#about"
            className='text-sm font-medium transition-opacity hover:opacity-50'
          >
            About
          </a>
        </div>

        {/* CTA */}
        <a 
          href="#contact"
          className='group flex items-center gap-2 text-sm font-semibold'
        >
          Start a project
          <ArrowUpRight 
            size={17}
            className='transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1'
          />
        </a>

      </nav>
    </header>
  )
}

export default Navbar;