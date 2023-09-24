import React, { useState } from "react";
import "./App.css";
// import card_line from "card_line.png"

const App = () => {
  const [cvv, setCvv] = useState("");
  const [cardname, setCardname] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [numErr, setNumErr] = useState("");
  const [exp_m, setExp_m] = useState("");
  const [exp_y, setExp_y] = useState("");
  const [exp_err, setExp_err] = useState("");
  const [cvvErr, setCvvErr] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reset =()=>{
    setIsSubmitted(false);
    setCardname("")
    setNameErr("")
    setCardNum("")
    setNumErr("")
    setExp_err("")
    setExp_m("")
    setExp_y("")
    setCvv("")
    setCvvErr("")
  }

  var isErr;
  const cardDetails = (e) => {
    isErr = false;
    e.preventDefault();
    checkError();
    if (!isErr) {
      setIsSubmitted(true);
    }
  };

  const checkError = () => {
    if (cardname === "") {
      setNameErr("Card Name can not be blank");
      isErr = true;
    }
    if (cardNum === "") {
      setNumErr("Card Number Can not be blank");
      isErr = true;
    }
    if (cardNum.match(/[a-zA-Z]/g)) {
      setNumErr("Format Error, Card Number can only contain number");
      isErr = true;
    }
    if (cardNum.length > 16 || cardNum.length < 16) {
      setNumErr("Card Number not valid");
      isErr = true;
    }
    if (exp_m === "" || exp_y === "") {
      setExp_err("Can't be blank");
      isErr = true;
    }
    if (exp_y.length > 2 || exp_m.length > 2) {
      setExp_err("Not valid");
      isErr = true;
    }
    if (cvv === "") {
      setCvvErr("Can't be blank");
      isErr = true;
    }
    if (cvv.length > 3) {
      setCvvErr("Not valid");
      isErr = true;
    }
  };

  return (
    <div className="w-[100vw] flex sm:flex-col h-[100vh]">
      <div className="lg:w-1/3 md:w-1/3 w-full lg:h-screen md:h-screen h-[400px] bg-gradient-to-br from-[#21092F] via-[#5d1361] to-[#21092F] absolute top-0 left-0 flex flex-col-reverse md:flex-col -z-20 ">
        {/* Front view of card */}
        <div className="bg-gradient-to-br from-[#6348FE] from-[10%] via-[#D53AFF] to-[#610595] h-[250px] w-[450px] rounded-xl px-10 py-8 relative left-4 top-10 md:top-32 md:left-32">
          <div className="w-full flex items-center gap-7">
            <div className="bg-white h-[50px] w-[50px] rounded-full"></div>
            <div className="border border-white h-[30px] w-[30px] rounded-full"></div>
          </div>
          <div className="flex flex-col w-full mt-[50px] text-white text-base md:text-2xl">
            <div className="w-full flex flex-row justify-between">
              <p className="tracking-widest num-1">
                {isSubmitted ? cardNum.slice(0, 4) : "0000"}
              </p>
              <p className="tracking-widest num-2">
                {isSubmitted ? cardNum.slice(4, 8) : "0000"}
              </p>
              <p className="tracking-widest num-3">
                {isSubmitted ? cardNum.slice(8, 12) : "0000"}
              </p>
              <p className="tracking-widest num-4">
                {isSubmitted ? cardNum.slice(12, 16) : "0000"}
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-4 items-center justify-between">
            <p className="text-white text-sm">
              {isSubmitted ? cardname : "JANE APPLE SEED"}
            </p>
            <p className="text-white text-sm">
              {isSubmitted ? `${exp_m}/${exp_y}` : "00/00"}
            </p>
          </div>
        </div>
        {/* Back view oof card */}
        <div className="bg-[#D2D3D9] h-[250px] w-[450px] rounded-xl py-8 ml-28 relative top-32 -z-10 -left-4 md:top-36 lg:left-26 md:left-36">
          <div className="bg-[#2F2F2F] w-ful h-[55px]"></div>
          <div className="w-3/4 bg-gray-400 mx-auto flex flex-col items-end justify-center rounded-md h-[40px] mt-7">
            <p className="text-gray-200 text-sm pr-2 tracking-widest">
              {isSubmitted ? cvv : "000"}
            </p>
          </div>
          <img
            className="w-2/4 mx-auto mt-7"
            src="card_line.png"
            alt="card line"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 md:2/3 h-screen flex justify-center items-center absolute lg:right-0 md:right-0 sm:top-0">
        {isSubmitted ? (
          <div className="flex justify-center items-center flex-col w-[400px] sm:w-full">
            <img src="check.png" alt="check" className="mb-10" />
            <h1 className="mb-10 text-3xl">THANK YOU</h1>
            <p className="mb-6 text-[#8F8694]">We&apos;ve added your card details</p>
            <button className="w-full bg-[#21092F] text-[#fff] rounded-lg text-center text-xl py-2" onClick={reset}>
              Continue
            </button>
          </div>
        ) : (
          <form className="w-[400px] sm:w-full" onSubmit={cardDetails}>
            <div className="w-full mb-4">
              <p className="">CARDHOLDER NAME</p>
              <input
                type="text"
                placeholder="e.g JANE APPLE SEED"
                className={`placeholder:text-[#DFDEE0] w-full text-xl rounded-lg p-2 ${
                  nameErr
                    ? "border border-[#FF5050]"
                    : "border border-[#DFDEE0]"
                }`}
                onChange={(e) => setCardname(e.target.value)}
                value={cardname}
              />
              {nameErr ? (
                <span className={`text-[#FF5050]`}>{nameErr}</span>
              ) : (
                ""
              )}
            </div>
            <div className="w-full mb-4">
              <p className="">CARD NUMBER</p>
              <input
                type="number"
                placeholder="e.g. 1234 5678 9123 0000"
                maxLength={16}
                className={`placeholder:text-[#DFDEE0] w-full border border-[#DFDEE0] text-xl rounded-lg p-2 remove-arrow ${
                  numErr ? "border border-[#FF5050]" : "border border-[#DFDEE0]"
                }`}
                // onChange={(e) => cardNumber(e)}
                onChange={(e) => setCardNum(e.target.value)}
                value={cardNum}
              />
              {numErr ? <span className={`text-[#FF5050]`}>{numErr}</span> : ""}
            </div>
            <div className="flex gap-2 w-full mb-4">
              <div className="w-1/2">
                <p>Exp. Date (MM/YY)</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="MM"
                    className="placeholder:text-[#DFDEE0] w-full border border-[#DFDEE0] text-xl rounded-lg p-2 remove-arrow"
                    onChange={(e) => setExp_m(e.target.value)}
                    value={exp_m}
                  />
                  <input
                    type="number"
                    placeholder="YY"
                    className="placeholder:text-[#DFDEE0] w-full border border-[#DFDEE0] text-xl rounded-lg p-2 remove-arrow"
                    onChange={(e) => setExp_y(e.target.value)}
                    value={exp_y}
                  />
                </div>
                {exp_err ? (
                  <span className={`text-[#FF5050]`}>{exp_err}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="w-1/2">
                <p className="">CVV</p>
                <input
                  type="number"
                  placeholder="e.g. 123"
                  maxLength={3}
                  className="placeholder:text-[#DFDEE0] w-full border border-[#DFDEE0] text-xl rounded-lg p-2 remove-arrow"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
                {cvvErr ? (
                  <span className={`text-[#FF5050]`}>{cvvErr}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <input
              type="submit"
              className="w-full bg-[#21092F] text-[#fff] rounded-lg text-center text-xl py-2"
              placeholder="Confirm"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
