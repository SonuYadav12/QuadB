import React from "react";

function Stats() {
  return (
    <section className="py-4 sm:py-6 lg:py-8">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h4 className="text-md font-medium text-gray-400">Best Price To Trade</h4>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 px-4 mt-4 sm:px-0">
          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="px-4 py-6">
              <h4 className="text-3xl font-bold text-center text-cyan-500">0.1 %</h4>
              <p className="mt-1.5 text-base font-medium text-center leading-tight text-gray-500">5 Min</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="px-4 py-6">
              <h4 className="text-3xl font-bold text-center text-cyan-500">0.9 %</h4>
              <p className="mt-1.5 text-base font-medium text-center leading-tight text-gray-500">1 Hour</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-cyan-500 text-gray-50 col-span-2 sm:col-span-1 lg:col-span-2 xl:col-span-2">
            <div className="px-4 py-6">
              <h4 className="text-5xl font-bold text-center">₹ 26,56,110</h4>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="px-4 py-6">
              <h4 className="text-3xl font-bold text-center text-cyan-500">2.73%</h4>
              <p className="mt-1.5 text-base font-medium text-center leading-tight text-gray-500">1 Day</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100">
            <div className="px-4 py-6">
              <h4 className="text-3xl font-bold text-center text-cyan-500">7.51%</h4>
              <p className="mt-1.5 text-base font-medium text-center leading-tight text-gray-500">7 Days</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-base text-center text-gray-400">Average BTC/INR net price including Commission</p>
      </div>
    </section>
  );
}

export default Stats;
