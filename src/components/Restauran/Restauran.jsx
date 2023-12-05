import Button from "../Button/Button";

const Restauran = () => {
  return (
    <>
      <div className="container max-w-[1200px] mx-auto restauran grid grid-cols-2 py-[80px]">
        <div className="  ">
          <p className=" w-[152px] text-[#FF8A00] bg-[rgba(255,138,0,0.2)] rounded-[126px] text-center text-[18px] py-[10px] px-[15px] mb-4">Restauran</p>
          <div className="ml-[12px]">
          <h1 className="text-7xl w-[10ch] font-semibold " >Italian Cuisine</h1>
          <p className="mt-8 leading-8 font-[500] tracking-widest  max-w-md ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>

          <div className="buttons flex gap-5 mt-[80px]">
            <Button bg={"bg-[#FF8A00]"} buttonname="Order now" />
            <Button bg={`bg-[#3FA72F]`} buttonname="Reservation" />
          </div>
          </div>
        </div>

        <div className="relative">
          <img className="absolute top-[-10px] left-[-20px] rotate-[-3deg]" src="assets/Restauran/yuxari.png" alt="" />
          <img className=" relative bottom-[-20px] z-50" src="assets/Restauran/esas.png " alt="" />
          <img className="absolute bottom-0 right-0 rotate-[10deg]" src="assets/Restauran/asagi.png" alt="" />
          
        </div>
      </div>
    </>
  );
};

export default Restauran;
