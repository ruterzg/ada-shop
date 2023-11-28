// import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Sign from "../../../assets/Sign.png";

function JoinUs() {
  return (
    <div
      style={{ "--image-url": `url(${Sign})` }}
      className=" sm:bg-[#F3F5F7] md:bg-[image:var(--image-url)]  h-[180px]  p-4 flex flex-col items-center justify-between mb-[20px] sm:w-[100vw] md:w-auto"
    >
      <h2 className="font-[500] text-[28px] mt-[15px]">Join Our Newsletter</h2>
      <p className="font-[400] text-[14px] mt-[15px]">
        Sign up for deals, new products and promotions
      </p>
      <InputGroup className="mb-3 w-[311px]">
        <Form.Control
          placeholder="✉️ Email address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">Signup</InputGroup.Text>
      </InputGroup>
    </div>
  );
}
export default JoinUs;
