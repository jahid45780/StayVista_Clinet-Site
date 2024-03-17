import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";

const AddRoom = () => {
    const {user} = useAuth()
    const [dates, setDates]= useState({
         startDate : new Date(),
         endDate: new Date(),
         key:'selection'
    })

      const handleSubmit = async e => {
         e.preventDefault()
         const form = e.target
         const location = form.location.value
         const category = form.category.value
         const title = form.title.value
         const to = dates.endDate
         const from = dates.startDate
         const price = form.price.value
         const guest= form.total_guest.value
         const bedrooms = form.bedrooms.value
         const bathrooms = form.bathrooms.value
         const description = form.description.value
         const image = form.image.files[0]

         const host = {
             name: user?.displayName,
             image:user?.photoURL,
             email:user?.email,
         }

         const image_url =  await imageUpload(image)

         const roomData = {
             location,
             category,
             title,
             to,
             from,
             price,
             bedrooms,
             bathrooms,
             guest,
             description,
             host,
             image: image_url?.data?.display_url
         }
         console.table(roomData)
      }

    //   handle date change react date range calender
    const handleDates =  ranges =>{
        
        setDates(ranges.selection)
    }

    return (
        <div>
            <Helmet> <title> Add Room || JB Booking Dashboard </title> </Helmet>
            {/* form */}

            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates} dates={dates} />

        </div>
    );
};

export default AddRoom;