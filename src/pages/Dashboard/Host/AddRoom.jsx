import { Helmet } from "react-helmet-async";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../hooks/useAuth";
import { addRoom } from "../../../api/rooms";
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddRoom = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    const [loading, setLoading]= useState(false)
    const [uploadButtonText, setUploadButtonText]= useState('Upload Image')

    const [dates, setDates]= useState({
         startDate : new Date(),
         endDate: new Date(),
         key:'selection'
    })

      const handleSubmit = async e => {
        setLoading(true)
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

          try{
             
            const data = await addRoom(roomData)
            console.log(data);
            setUploadButtonText('Uploaded!!')
            toast.success('Room Added')
            navigate('/dashboard/my-listings')
            
          } catch (err){
            toast.error(err.message)
          } finally{
            setLoading(false)
          }

         console.table(roomData)
      }

    //   handle date change react date range calender
    const handleDates =  ranges =>{
        
        setDates(ranges.selection)
    }
    // handle Image btn text
    const handleImageChange = image =>{
         setUploadButtonText(image.name)
    }

    return (
        <div>
            <Helmet> <title> Add Room || JB Booking Dashboard </title> </Helmet>
            {/* form */}

            <AddRoomForm handleSubmit={handleSubmit} handleDates={handleDates}
             handleImageChange={handleImageChange} loading={loading}
             uploadButtonText={uploadButtonText}
             dates={dates} />

        </div>
    );
};

export default AddRoom;