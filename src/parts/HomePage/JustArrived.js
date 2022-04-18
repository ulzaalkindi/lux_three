import React from "react";

export default function JustArrived() {
  return (
    <section className="flex flex-col py-6">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          {/* Just Arrived row 1 */}
          <div className="px-4 relative card group">
            <div
              className="rounded-xl overflow-hidden card-shadow relative"
              style={{ width: 287, height: 386 }}
            >
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex items-center justify-center w-full h-full bg-black bg-opacity-30">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
