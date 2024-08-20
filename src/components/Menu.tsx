import { Button } from '@/components/ui/button';
import { useGlobalContext } from '@/lib/useGlobalContext';

type TState = {
  id: number
  title: string
  description: string
  quantity: number
  price: string
  imageUrl: string
}

function Menu() {
  const { state, dispatch } = useGlobalContext();

  const addToCart = ({id, title, description, imageUrl, ...others}: TState) => {
    dispatch({type: 'ADD_TO_CART', value: {id, title, description, imageUrl, ...others}})
  }

  return (
    <section className='flex w-full flex-col h-auto my-4 px-4'>
      <div className='items-center justify-center mx-auto mb-8'>
        <Button size={'default'} className='text-darkOrange rounded-none text-center font-bebasNeue text-base bg-yellow border-r-0 hover:bg-yellow/90' variant={'default'}>Always Tasty Burger</Button>
      </div>

      <div className='mx-auto md:mb-8 w-10/12'>
        <h1 className='font-alfaSlabOne text-darkOrange text-center text-3xl mb-4'>Choose & Enjoy</h1>
        <p className='font-montserrat text-center text-xs text-darkOrange'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>

      <div className='flex flex-col w-full h-auto justify-between gap-2 mb-4 md:flex-row'>
        {state.menus.map(({imageUrl, title, description, id, ...others }: TState) => {
          return (
            <div key={id} className='flex flex-col items-center mb-4 md:mb-0'>
              <img src={imageUrl} alt="burger1" />
              <h2 className='font-bebasNeue text-3xl text-center text-darkOrange mb-4'>{title}</h2>
              <p className='font-montserrat w-10/12 text-xs text-darkOrange text-center mb-4'>{description}</p>
              <Button onClick={(e) => {
                e.preventDefault();
                addToCart({id, title, description,imageUrl, ...others})
              }} size={'default'} className='w-1/2 font-alfaSlabOne rounded-none text-center text-sm bg-redSecondary border-r-0 hover:bg-redSecondary/90' variant={'default'}>ADD TO CART</Button>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Menu