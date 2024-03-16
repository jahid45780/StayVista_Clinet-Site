// import { formatDistance } from "date-fns";
import { useState } from "react";
import Button from "../Button/Button";
import Calender from "./Calender";
import { formatDistance } from "date-fns";

const RoomReservation = ({room}) => {
    
    const [value, setValue] = useState({
        startDate: new Date(room?.from),
        endDate: new Date(room?.to),
        key: 'selection',
      })
    // console.log(room.from);

     //   Total days * price
    const totalDays = parseInt(
      formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
    )
  // Total Price Calculation
    const totalPrice = totalDays * room?.price


    return (
        <div className=" rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white" >
            <div className=" flex gap-1 p-4" >
                <div className=" text-2xl font-semibold " >  ${room?.price} </div>
                <div className=" text-neutral-500 mt-1 font-bold" > Night </div>
            </div>
            <hr />
            <div className=" flex justify-center" > <Calender value={value} ></Calender> </div>
            <hr />
            <div className=" p-4" >
                <Button label={'Reserve'} ></Button>
            </div>
            <hr />
            <div className="  p-2 flex items-center justify-between font-semibold text-lg" >
                <div>Total</div>
                <div> ${totalPrice} </div>
            </div>
        </div>
    );
};

export default RoomReservation;