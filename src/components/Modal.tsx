import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/Separator";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGlobalContext } from "@/lib/useGlobalContext";

type Props = {
  isShowModal: boolean;
  setShowModal: (arg0: boolean) => void;
  title: string;
  description: string;
};

function Modal({ isShowModal, setShowModal, title }: Props) {
  const { state, dispatch } = useGlobalContext();

  const subtotal = state.carts.reduce((acc, item) => {
    const itemTotal = parseInt(item.price) * item.quantity;
    return acc + itemTotal;
  }, 0);


  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const formatAmount = (number: number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const removeItemCart = (index: number) => {
    dispatch({type: 'REMOVE_FROM_CART', value: state.carts[index]})
  }

  const resetCart = () => {
    dispatch({type: 'RESET_CART'})
  }

  return (
    <Dialog
      open={isShowModal}
      onOpenChange={(open) => {
        if (!open) {
          setShowModal(false);
        }
      }}
    >
      <DialogTrigger asChild />
      <DialogContent className="max-h-[calc(100%-100px)] max-w-sm overflow-y-auto border-4 border-black rounded-md md:max-w-2xl lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="font-montserrat uppercase">
            {title}
          </DialogTitle>
          <Separator className="SeparatorRoot bg-black" />
        </DialogHeader>
        <div className="flex flex-col">
          {state.carts.length === 0
            ? <h2 className="text-center font-bebasNeue text-xl">Oops! Looks like your cart is empty. Time to shop!</h2>
            : state.carts.map((item, index) => (
                <div
                  className={[
                    "flex flex-row px-4 p-2 w-full h-auto border-t-2 border-b-2 border-black justify-around",
                    index % 2 === 0 ? "bg-gray-200" : "bg-white",
                    "mb-2",
                  ].join(" ")}
                  key={item.id}
                >
                  <div className="w-7 p-1 h-7 overflow-hidden items-center justify-center bg-cover border border-gray-700 rounded-sm md:w-14 md:h-auto">
                    <img src={item.imageUrl} alt="burger-1" />
                  </div>
                  <h3 className="font-bebasNeue tracking-widest text-darkOrange text-xs md:text-base">
                    {item.title}
                  </h3>
                  <span className="font-bebasNeue tracking-wide text-darkOrange text-xs md:text-base">
                    x {item.quantity}
                  </span>
                  <span className="font-bebasNeue tracking-widest text-darkOrange text-xs md:text-base">
                    {formatAmount(Number(item.price))}
                  </span>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      removeItemCart(index);
                    }}
                    className="bg-darkOrange w-7 h-7 md:h-auto md:w-14"
                  >
                    <p className={`text-sm md:text-lg`}>X</p>
                  </Button>
                </div>
              ))}
        </div>
        {state.carts.length > 0 && (
          <div className="flex flex-col w-full h-auto items-start gap-4 mb-12 md:items-end">
            <div className="flex flex-row w-full justify-between md:w-1/2">
              <span className="font-montserrat text-sm text-nowrap font-bold tracking-widest">
                SUB-TOTAL
              </span>
              <span className="font-montserrat text-sm text-nowrap font-bold tracking-widest">
                {formatAmount(subtotal)}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between md:w-1/2">
              <span className="font-montserrat text-sm text-nowrap font-bold tracking-widest">
                TAX
              </span>
              <span className="font-montserrat text-sm text-nowrap font-bold tracking-widest">
                {formatAmount(tax)}
              </span>
            </div>
            <div className="flex flex-row w-full justify-between md:w-1/2">
              <span className="font-montserrat font-bold tracking-widest">
                TOTAL
              </span>
              <span className="font-montserrat font-bold tracking-widest">
                {formatAmount(total)}
              </span>
            </div>
          </div>
        )}
        <DialogFooter className="flex flex-row justify-between sm:flex-row sm:justify-between gap-2">
          <Button
            onClick={() => setShowModal(false)}
            className="bg-gray-200 text-darkOrange"
          >
            <p
              className={`text-sm md:text-base font-montserrat text-darkOrange font-bold `}
            >
              Continue Shopping
            </p>
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              resetCart();
              setShowModal(false);
            }}
            disabled={state.carts.length === 0}
            className="bg-yellow text-darkOrange"
          >
            <p
              className={`text-sm md:text-base font-montserrat text-darkOrange font-bold `}
            >
              Checkout
            </p>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
