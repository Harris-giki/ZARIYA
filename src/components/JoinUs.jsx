"use client";
import { PinContainer } from "../../ui/3d-pin";

export function JoinUs() {
  return (
    <div
      className="min-h-[45rem] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      id="JoinUs"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left side - 3D Pin Card */}
        <div className="flex justify-center lg:pt-0 lg:justify-start pt-20 sm:justify-center sm:pt-16 items-center">
          <PinContainer
            title="Click here."
            href="https://docs.google.com/forms/d/1M-4FkLfOn2WK0zlOEH8IAh_w1NqNXw2WNGrTZjJlsks/edit"
          >
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] sm:w-[22rem] h-[29rem]">
              <h3 className="text-2xl text-slate-100 pb-2">
                Join Our Monthly Impact Circle.
              </h3>
              <p className="text-base font-normal text-slate-500 mb-4">
                Even small monthly contributions create big changes. Start your
                journey of giving back.
              </p>
              <div className="flex-1 flex items-center justify-center mt-4">
                <img
                  src="/Zariya.png"
                  alt="Zariya-logo"
                  className="w-80 h-auto object-contain"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Right side - Image + Text */}
        <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-light text-gray-900 sm:pt-25 pt-25 lg:pt-0">
            Join Us to Make a
          </h1>
          <h3 className="text-5xl sm:text-2xl md:text-3xl lg:text-5xl font-light text-gray-400 leading-tight">
            Change Together.✨
          </h3>
          <div className="w-full max-w-md sm:max-w-xl">
            <img
              src="/zariya-2.jpg"
              alt="Student-led"
              className="w-full h-65 object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
