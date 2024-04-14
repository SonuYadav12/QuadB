import React, { useState, useEffect } from "react";

function Data() {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    fetch(
      "https://quadb-tech-nodejs-assignment-backend-sigma.vercel.app/api/dbtickers"
    )
      .then((response) => response.json())
      .then((data) => {
        setTickers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const diff = (ticker) => {
    let diff = ticker.sell - ticker.buy;
    let ans = (diff * 100) / ticker.buy;

    return ans.toFixed(2);
  };

  const Savings = (ticker) => {
    let diff = ticker.sell - ticker.buy;
    let ans = diff * ticker.volume;

    return ans.toFixed(2);
  };

  const formatCurrency = (value) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3 xl:mx-12 mt-3">
        <p className="text-center font-bold text-white">#</p>
        <p className="text-center font-bold text-white">Platform</p>
        <p className="text-center font-bold text-white">Last Traded Price</p>
        <p className="text-center font-bold text-white">Buy And Sell Price</p>
        <p className="text-center font-bold text-white">Difference</p>
        <p className="text-center font-bold text-white">Savings</p>
      </div>

      <ul className="mt-3">
        {tickers.map((ticker, index) => (
          <li key={ticker.id}>
            <div className="grid bg-gray-600 p-2 text-gray-100 rounded-md grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-3 xl:mx-12 mt-3">
              <p className="text-center font-bold">{index + 1}</p>
              <p className="text-center font-bold">{ticker.name}</p>
              <p className="text-center font-bold">
                {formatCurrency(ticker.last)}
              </p>
              <p className="text-center font-bold">
                {formatCurrency(ticker.buy)} / {formatCurrency(ticker.sell)}
              </p>
              <div className="text-center font-bold flex justify-center gap-3">
                {diff(ticker) > 0 ? (
                  <>
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                    </span>
                    <span>{diff(ticker)} %</span>
                  </>
                ) : (
                  <>
                    <span className="text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </span>
                    <span>{diff(ticker)} %</span>
                  </>
                )}
              </div>
              <div className="text-center font-bold flex justify-center gap-2">
                {Savings(ticker) > 0 ? (
                  <>
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-up-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                      </svg>
                    </span>
                    <span>{formatCurrency(Savings(ticker))}</span>
                  </>
                ) : (
                  <>
                    <span className="text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-caret-down-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </span>
                    <span>{formatCurrency(Savings(ticker))}</span>
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
