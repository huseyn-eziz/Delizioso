import Button from "../Button/Button";


const Welcome = () => {
    return (
        <>
            <div className=" pt-14  mx-auto  grid  grid-cols-2  bg-[rgba(63,198,110,0.2)]">
                <div className="mt-5">
                    <img className=" " src="./assets/Welcome/Picture.png" alt="" />

                </div>
                <div className="mt-20 ">
                    <div className="ml-[100px] mt-14 ">
                        <h1 className="text-7xl w-[12ch] font-semibold " >Welcome to <span className=" text-[#FF8A00]">delizioso</span></h1>
                        <p className="leading-8 font-[500] tracking-widest  max-w-md  my-[100px] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.</p>

                        <div className="buttons flex gap-5 ">
                            <Button bg={"bg-[#FF8A00]"} buttonname="See our menu" />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Welcome