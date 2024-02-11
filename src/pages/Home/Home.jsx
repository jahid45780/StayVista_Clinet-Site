import Categories from "../../components/Rooms/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {

  return (
    <div>
           {/* catagory part */}

           <Categories></Categories>

           {/* Room part */}

            <Rooms></Rooms>
    </div>
  )
}

export default Home
