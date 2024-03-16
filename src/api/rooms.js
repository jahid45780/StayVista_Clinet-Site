import axiosSecure from "."
  
// fetch all room from db
 export const getAllRooms = async ()=>{
      const { data } = await axiosSecure('/rooms')
      return data
}
// fetch single room from database
 export const getRoom = async (id) => {
       const {data} = await axiosSecure(`/room/${id}`)
       return data
}