
function Hero() {
  return (
    <section className='flex flex-row hero md:px-4 items-center w-screen min-h-[254px] md:min-h-[750px] bg-no-repeat'>
      <div className='flex flex-col w-full h-auto px-10 pt-8 md:w-full'>
        <img className='w-1/2' src="/images/content/main-subtitle.png" alt="main-subtitle" />
        <h1 className='font-alfaSlabOne text-darkOrange text-5xl md:text-9xl md:mt-6'>Burger</h1>
        <span className='font-alfaSlabOne text-darkOrange text-2xl md:text-6xl'>Week</span>
      </div>
      <div className='flex flex-col w-full h-auto'>
        <img src="/images/content/main-burger.png" alt="main-burger" />
      </div>
    </section>
  )
}

export default Hero