import { TbBrandBooking } from "react-icons/tb";
import MenuItem from "./MenuItem";

const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={TbBrandBooking}
                label='My Bookings'
                address='my-bookings'
              />
        </>
    );
};

export default GuestMenu;