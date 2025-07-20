"use client";
import { PinContainer } from "../../ui/3d-pin";

export function JoinUs() {
  return (
    <div
      className="min-h-[45rem] w-full flex items-center justify-center px-8"
      id="JoinUs"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left side - 3D Pin Card */}
        <div className="flex items-center justify-center lg:justify-start">
          <PinContainer
            title="Click here."
            href="https://docs.google.com/forms/d/1M-4FkLfOn2WK0zlOEH8IAh_w1NqNXw2WNGrTZjJlsks/edit"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[22rem] h-[29rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 text-2xl text-slate-100">
                Join Our Monthly Impact Circle.
              </h3>
              <div className="text-base !m-0 !p-0 font-normal mb-4">
                <span className="text-slate-500">
                  Even small monthly contributions create big changes. Start
                  your journey of giving back.
                </span>
              </div>
              {/* Properly sized and positioned logo */}
              <div className="flex-1 flex items-center justify-center mt-4">
                <img
                  src="/Zariya.png"
                  alt="Zariya-logo"
                  className="w-75 h- object-contain"
                />
              </div>
            </div>
          </PinContainer>
        </div>

        {/* Right side - Image section */}
        <div className="flex flex-col items-center lg:items-start space-y-6">
          <h1 className="text-4xl font-light text-gray-900">
            Join Us to Make a
          </h1>
          <h3 className="text-6xl font-light text-gray-400 text-center lg:text-left leading-tight">
            Change Together.✨
          </h3>
          <div className="w-full max-w-3xl">
            <img
              src="/zariya-2.jpg"
              alt="Student-led"
              className="w-full h-auto object-cover shadow-lg rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
