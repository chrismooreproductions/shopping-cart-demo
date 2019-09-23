import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

const div = document.createElement("div");

afterEach(() => {
  ReactDOM.unmountComponentAtNode(div);
});
