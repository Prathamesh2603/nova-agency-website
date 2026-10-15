import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <main>
      <Navbar />

      <section className="flex min-h-screen items-center px-6 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            Independent Digital Agency
          </p>

          <h1 className="max-w-5xl font-heading text-6xl font-medium leading-[0.9] tracking-tight md:text-8xl lg:text-[9rem]">
            We build
            <br />
            digital
            <br />
            experiences.
          </h1>
        </div>
      </section>
    </main>
  )
}

export default Home