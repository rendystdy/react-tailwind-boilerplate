import React, { useState } from "react";
import Modal from "./Modal";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useGlobalContext } from "@/lib/useGlobalContext";

type THeader = {
  theme?: string;
  position?: string;
};
export default function Header({
  theme = "black",
  position = "absolute",
}: THeader) {
  const [toggleMainMenu, setToggleMainMenu] = useState(false);

  const {state} = useGlobalContext();

  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <Dialog>
      <header className={[position, "w-full z-40 px-4"].join(" ")}>
        <div className="container mx-auto py-5">
          <div className="flex flex-stretch items-center">
            <div className="w-full items-center flex">
              <a href="/">
                <img src="/images/content/logo.png" alt="logo" />
              </a>
            </div>
            <div className="w-full"></div>
            <div className="w-auto">
              <div className="flex invisible md:visible flex-row items-center justify-end">
                <img
                  src="/images/content/delivery-icon.png"
                  alt="delivery-icon"
                  className="w-auto h-4 mr-2"
                />
                <span className="text-xs">Express Delivery +1234567890</span>
              </div>
              <ul
                className={[
                  "fixed bg-white inset-0 flex flex-col items-end justify-start pt-14 md:pt-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center md:justify-center ",
                  toggleMainMenu
                    ? "opacity-100 z-40 visible"
                    : "invisible opacity-0",
                ].join(" ")}
              >
                <li className="mx-3 py-3 w-full text-right border-b-2 border-black md:border-b-0 md:py-0">
                  <a
                    href="/showcase"
                    className={[
                      "hover:underline",
                      theme === "white"
                        ? "text-black md:text-white"
                        : "text-black md:text-black",
                      "text-lg font-bebasNeue font-thin",
                    ].join(" ")}
                  >
                    Home
                  </a>
                </li>
                <li className="mx-3 py-3 w-full text-right border-b-2 border-black md:border-b-0 md:py-0">
                  <a
                    href="/catalog"
                    className={[
                      "hover:underline",
                      theme === "white"
                        ? "text-black md:text-white "
                        : "text-darkOrange md:text-darkOrange",
                      "text-lg font-bebasNeue font-thin",
                    ].join(" ")}
                  >
                    Menu
                  </a>
                </li>
                <li className="mx-3 py-3 w-full text-right border-b-2 border-black md:border-b-0 md:py-0">
                  <a
                    href="/delivery"
                    className={[
                      "hover:underline",
                      theme === "white"
                        ? "text-darkOrange md:text-white "
                        : "text-darkOrange md:text-darkOrange",
                      "text-lg font-bebasNeue font-thin",
                    ].join(" ")}
                    style={{ textWrap: "nowrap" }}
                  >
                    Our Story
                  </a>
                </li>
                <li className="mx-3 py-3 w-full text-right border-b-2 border-black md:border-b-0 md:py-0">
                  <a
                    href="/rewards"
                    className={[
                      "hover:underline",
                      theme === "white"
                        ? "text-darkOrange md:text-white "
                        : "text-darkOrange md:text-darkOrange",
                      "text-lg font-bebasNeue font-thin",
                    ].join(" ")}
                    style={{ textWrap: "nowrap" }}
                  >
                    Contact US
                  </a>
                </li>
                <li className="mx-3 py-3 w-full text-right border-b-2 border-black md:hidden md:border-b-0 md:py-0">
                  <DialogTrigger asChild>
                      <button
                        className={[
                          "hover:underline",
                          theme === "white"
                            ? "text-darkOrange md:text-white "
                            : "text-darkOrange md:text-darkOrange",
                          "text-lg font-bebasNeue font-thin w-8 h-8 cart",
                        ].join(" ")}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsShowModal(!isShowModal);
                          setToggleMainMenu((prev) => !prev)
                        }}
                      >
                        <img src="/images/content/cart.png" alt="cart" />
                      </button>
                    </DialogTrigger>
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <ul className="items-center flex">
                <li className="ml-6 block md:hidden">
                  <DialogTrigger asChild>
                    <button
                      className={[
                        "flex z-50 items-center justify-center w-8 h-8 text-darkOrange md:text-white focus:outline-none",
                        toggleMainMenu ? "fixed top-7 right-4" : "relative",
                        theme === "white"
                          ? "text-darkOrange md:text-white"
                          : "text-darkOrange md:text-darkOrange",
                      ].join(" ")}
                      onClick={() => setToggleMainMenu((prev) => !prev)}
                    >
                      {toggleMainMenu ? (
                        <p className="font-bebasNeue font-bold text-2xl">X</p>
                      ) : (
                        <svg
                          className="fill-current"
                          width="18"
                          height="17"
                          viewBox="0 0 18 17"
                        >
                          <path d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z" />
                          <path d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z" />
                          <path d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z" />
                        </svg>
                      )}
                    </button>
                  </DialogTrigger>
                </li>
                <li className="ml-6 hidden md:block">
                  <DialogTrigger asChild>
                    <button
                      className={[
                        "cart flex items-center justify-center w-8 h-8",
                        theme === "white"
                          ? "text-black md:text-white"
                          : "text-black md:text-black",
                        "text-base",
                      ].join(" ")}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsShowModal(!isShowModal);
                      }}
                    >
                      <img src="/images/content/cart.png" alt="cart" />
                      {state.carts.length > 0 && <div className="absolute justify-center top-5 right-10 w-5 h-5 items-center rounded-full bg-red-500">
                        <p className="text-[10px] text-white text-center">{state.carts.length}</p>
                      </div>}
                    </button>
                  </DialogTrigger>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Modal
        title="Shopping Cart"
        description=""
        isShowModal={isShowModal}
        setShowModal={setIsShowModal}
      />
    </Dialog>
  );
}
