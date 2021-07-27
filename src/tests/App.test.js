import App from '../App';
import { mount, shallow } from 'enzyme';

const app = mount(<App />);

describe("App", () => {
    it("should render without crashing", () => {
        expect(app.exists()).toBe(true);
    })

    it("should render the title", () => {
        expect(app.html()).toContain("KIMCHI &amp; KPOP")
    })

    it("should render a navbar with buttons", () => {
        expect(app.html()).toContain("HOME");
        expect(app.html()).toContain("ABOUT");
        expect(app.html()).toContain("MENU");
        expect(app.html()).toContain("BOOK NOW");
    })
})