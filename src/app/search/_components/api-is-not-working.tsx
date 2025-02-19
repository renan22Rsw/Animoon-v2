import Image from "next/image";
import React from "react";

import notWorkingApiImage from "@/../public/not-working.png";

const ApiNotWorking = () => {
  return (
    <div className="flex h-[450px] flex-col items-center justify-center">
      <h3 className="max-w-[400px] text-center font-bold text-foreground md:text-xl">
        Apologies, but it seems the API is currently unavailable. Please try
        again later.
      </h3>
      <div className="my-8 flex justify-center">
        <Image
          src={notWorkingApiImage}
          alt="not-working-api-image"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default ApiNotWorking;
