import { useState } from "react";
import Test2 from "./Test2";

function Test1() {
  //state
  //name.
  const [name, setName] = useState("Ravi");
  //address of user
  const [address, setAddress] = useState({ city: "vijayawada", pincode: 888888 });
  //skills of user
  const [skills, setSkills] = useState(["html", "css"]);

  //functions to change state
  //change name
  const changeName = () => {
    setName("Madhu");
  };
  //change address
  const changeAddress = () => {
    setAddress({ ...address, city: "bangalore" });
  };
  //change skills
  const addNewSkill = () => {
    setSkills(["Angular", ...skills]);
  };

  return (
    <div className="text-center mt-5">
      {/* Name */}
      <h1 className="mb-5">Name : {name}</h1>
      <button type="button" className="btn btn-info" onClick={changeName}>
        Change name
      </button>
      <hr />
      {/* Address */}
      <div className="mb-5">
        <h3>City : {address.city}</h3>
        <h3>PINCODE : {address.pincode}</h3>
        <button type="button" onClick={changeAddress}>
          Change address
        </button>
      </div>
      <hr />

      {/* Skills */}
      <div>
        {skills.map((sk) => (
          <h4 key={sk}>{sk}</h4>
        ))}
        <button type="button" onClick={addNewSkill}>
          Add new skill
        </button>
      </div>

      {/* nest Test2 here */}
      <Test2 name={name} address={address} />
    </div>
  );
}

export default Test1;



