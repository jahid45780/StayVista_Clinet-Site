import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading/Heading";

const Rooms = () => {

    const [rooms, setRooms]= useState([])
    const [params, setParams]= useSearchParams()
    const category = params.get('category')
    useEffect(()=>{
         fetch('rooms.json')
         .then(res=>res.json())
         .then(data=> {
            
            if(category){
                 const filtered = data.filter(room=>room.category===category)
                 setRooms(filtered)
            }
              else setRooms(data)
         })
    },[category])



    return (
       <Container>
        { rooms && rooms.length>0 ? 
            <div className=" pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8" >
            {
                rooms.map(room=><Card key={room._id} room={room} ></Card>  )
            }
        </div> : <div className=" flex items-center justify-center min-h-[calc(100vh-300px)]" >

        <Heading center={true} title='No Rooms Available in this Category!' subtitle='Please Select Other Categories' ></Heading>

        </div>  
     }
       </Container>
    );
};

export default Rooms;