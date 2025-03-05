import React from "react";
import KeyHoldingImg from "../Assets/Images/KeyHolding.jpg";
import "../Css Files/KeyHolding.css";

function KeyHoldingContent() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h3 className="key-heading">HOW DOES KEYHOLDING WORK?</h3>
            <p className="key-paragraph">
              A professional keyholding service involves a specialist security
              firm taking the first-response duties on themselves. They will
              have a set of keys to access your premises, locked up securely at
              their own centre of operations, and will use them to gain access
              to the building in the event of an emergency. That means, if in
              the middle of the night an emergency occurs, you’re not forcing a
              member of staff to respond: you’re leaving it to a security
              professional
            </p>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img className="keyImg" src={KeyHoldingImg} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
            <h3 className="key-heading">GUARANTEED RESPONSE</h3>
            <p className="key-paragraph">
              Keyholding is known as a ‘control room service’. That means, when
              an intruder alarm is activated at your business, our control room
              is alerted immediately. Our control room is manned 24/7 by
              on-alert security personnel, ready to respond at a moment’s
              notice. Consider how much more efficient this is than leaving the
              responsibility to a 9-5 employee, who will be at home and will
              have a vastly more laboured response time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeyHoldingContent;
