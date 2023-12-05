import { SlBasketLoaded } from "react-icons/sl";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container max-w-[1200px] mx-auto py-6 flex justify-between items-center">
            <div className="logo">
              <img src="./Logo-Delizioso.png" alt="" />
            </div>
            <div className="links">
              <ul className="flex gap-10">
                <li>Home</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Order online</li>
                <li>Reservation</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <SlBasketLoaded />
              <button className="bg-[#3FA72F] py-[15px] px-[36px] rounded-[133px] text-wh">Login</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
