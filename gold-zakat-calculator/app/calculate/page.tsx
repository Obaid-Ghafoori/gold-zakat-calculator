"use client";
import React, { useState, ChangeEvent } from "react";
import NavBar from "../components/navBar";
import Link from "next/link";

interface GoldItem {
  grams: string;
  karat: string;
}

const ZakatCalculatorPage = () => {
  const [goldItems, setGoldItems] = useState<GoldItem[]>([
    { grams: "", karat: "" },
  ]);

  const [zakatResult, setZakatResult] = useState("");

  const handleAddGold = () => {
    setGoldItems([...goldItems, { grams: "", karat: "" }]);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = event.target;
    setGoldItems(
      goldItems.map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
  };

  const calculateZakat = () => {
    let totalZakat = 0;
    const zakatDetails = goldItems.map((item) => {
      const grams = parseFloat(item.grams);
      const karat = parseFloat(item.karat);
      const pureGold = grams * (karat / 24);
      const zakatRate = 0.025; // 2.5%
      const zakatPayable = pureGold * zakatRate;
      totalZakat += zakatPayable;
      return { grams, karat, zakatPayable };
    });

    return { zakatDetails, totalZakat };
  };

  const handleSubmit = () => {
    let isValid = true;
    let errorMessage = "";

    for (const item of goldItems) {
      const grams = parseFloat(item.grams);
      const karat = parseFloat(item.karat);

      if (isNaN(grams) || grams < 0) {
        isValid = false;
        errorMessage = "Please enter a valid grams value greater than or equal to 0.";
        break;
      }

      if (isNaN(karat) || karat < 1 || karat > 24) {
        isValid = false;
        errorMessage = "Please enter a karat value between 1 and 24.";
        break;
      }
    }

    if (!isValid) {
      alert(errorMessage);
      return;
    }

    const { zakatDetails, totalZakat } = calculateZakat();
    const resultText =
      `The total zakat to pay in grams overview:\n` +
      zakatDetails
        .map(
          (detail) =>
            `Grams: ${detail.grams}  \t-\t Karat: ${detail.karat
            }  \t- \tZakat Payable: ${detail.zakatPayable.toFixed(4)}g\n`
        )
        .join("") +'------------------------------------------------------\n'+
      `Total Zakat Payable: \t\t\t\t\t\t\t\t\t\t${totalZakat.toFixed(4)}g`;
    setZakatResult(resultText);
  };

  return (
    <>
    <NavBar/>
    <div className="container flex flex-col items-center justify-center text-center">
      <h1 className="text-center">Zakat Calculator</h1>
      <p>
        Welcome to the Zakat Calculator. Please add your gold details below to
        calculate the Zakat payable.
      </p>
      {goldItems.map((item, index) => (
        <div key={index} className="gold-item text-white">
          <div className="flex items-center">
            <label htmlFor={`grams-${index}`}>Grams:</label>
            <input
              className="input input-bordered input-success input-xs max-w-xs text-white m-3"
              placeholder="Provide gold quantity"
              type="number"
              id={`grams-${index}`}
              name="grams"
              value={item.grams}
              onChange={(event) => handleInputChange(event, index)}
            />
            <label htmlFor={`karat-${index}`}>Karat:</label>
            <input
              className="input input-bordered input-success input-xs max-w-xs text-white m-3"
              placeholder="Select gold type"
              type="number"
              id={`karat-${index}`}
              name="karat"
              value={item.karat}
              onChange={(event) => handleInputChange(event, index)}
            />
            <button
              className="btn btn-bordered btn-success btn-square btn-outline btn-xs tooltip tooltip-right flex justify-center items-center"
              data-tip="Add more gold"
              onClick={handleAddGold}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <textarea
        className="textarea textarea-success fix w-full max-w-sm first-line:font-light"
        placeholder="Zakat Calculation Results"
        value={zakatResult}
        readOnly
      ></textarea>

      <button
        className="btn btn-primary w-64 rounded-full btn-sm m-3"
        onClick={handleSubmit}
      >
        Calculate Zakat
      </button>
      <Link
        className="btn btn-outline btn-info w-64 rounded-full btn-sm"
        href="/"
      >
        Go Back to Home
      </Link>
    </div></>
    
  );
};

export default ZakatCalculatorPage;
