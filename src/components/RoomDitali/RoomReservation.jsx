// import { formatDistance } from "date-fns";
import Button from "../Button/Button";
import Calender from "./Calender";

const RoomReservation = ({room}) => {
    // price calculation
    // const totalDays =  parseInt(
    //     formatDistance(new Date(room.to), new Date(room?.from)).split(' ')[0]
    // )
   
    // const TotalPrice = totalDays * room?.price
    // console.log(TotalPrice);
    return (
        <div className=" rounded-xl border-[1px] border-neutral-200 overflow-hidden bg-white" >
            <div className=" flex gap-1 p-4" >
                <div className=" text-2xl font-semibold " >  ${room?.price} </div>
                <div className=" text-neutral-500 mt-1 font-bold" > Night </div>
            </div>
            <hr />
            <div className=" flex justify-center" > <Calender></Calender> </div>
            <hr />
            <div className=" p-4" >
                <Button label={'Reserve'} ></Button>
            </div>
            <hr />
            <div className="  p-2 flex items-center justify-between font-semibold text-lg" >
                <div>Total</div>
                <div> ${room.price} </div>
            </div>
        </div>
    );
};

export default RoomReservation;