import { MdAddHomeWork } from "react-icons/md";
import MenuItem from "./MenuItem";
import { FaHouseFire } from "react-icons/fa6";

const HostMenu = () => {
    return (
        <>
            
            <MenuItem
                icon={MdAddHomeWork}
                label='Add Room'
                address='add-room'
              />
              <MenuItem
                icon={FaHouseFire}
                label='My Listings'
                address='my-listings'
              />

        </>
    );
};

export default HostMenu;