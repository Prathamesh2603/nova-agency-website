const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 px-5 pb-8 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        
        <div className="grid gap-10 border-t border-neutral-700 py-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a 
              href="#home"
              className="font-heading text-3xl font-bold tracking-tight"
            >
              NOVA<span className="text-lime-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
              Independent digital agency building thoughtful brands,
              digital experiences, and products for what's next.
            </p>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer