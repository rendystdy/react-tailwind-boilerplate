
function Banner() {
  return (
    <section className='flex flex-col my-4 px-8 w-full h-auto md:flex-row md:gap-4'>
      <div className='flex w-full h-auto mb-4' >
        <img src="/images/content/left-banner.png" alt="left-banner" />
      </div>
      <div className='flex w-full h-auto flex-col md:flex-col md:justify-start' >
        <div className='mb-4 md:mb-6'>
          <img src="/images/content/right-bannertop.png" alt="right-bannertop" />
        </div>
        <div className='mb-4 md:mb-0'>
          <img src="/images/content/right-bannerbottom.png" alt="right-bannerbottom" />
        </div>
      </div>
    </section>
  )
}

export default Banner