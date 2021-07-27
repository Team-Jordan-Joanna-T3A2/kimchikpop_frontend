import StaffMenu from '../components/StaffMenu';
import { mount, shallow } from 'enzyme';

const wrapper = shallow(<StaffMenu />);

describe("Staff Menu", () => {
    it("should render without crashing", () => {
        expect(wrapper.exists()).toBe(true);
    })

    it("should render buttons", () => {
        expect(wrapper.html()).toContain("MANAGE ALL BOOKINGS");
        expect(wrapper.html()).toContain("TODAY&#x27;S BOOKINGS");
        expect(wrapper.html()).toContain("CREATE A NEW STAFF ACCOUNT");
        expect(wrapper.html()).toContain("MANAGE STAFF");
    })
})