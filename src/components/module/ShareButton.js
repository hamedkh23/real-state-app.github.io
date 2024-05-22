"use client";

import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { LuShare2 } from "react-icons/lu";

function ShareButton() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <CopyToClipboard text={url}>
      <div className="flex items-center justify-center cursor-pointer">
        <LuShare2 className="ml-2.5 text-xl text-[#304ffe]" />
        <button className="border-none bg-none text-base text-[#808080] h-5 transition-all ease-in delay-100 cursor-pointer hover:text-[#304ffe]">
          اشتراک گذاری
        </button>
      </div>
    </CopyToClipboard>
  );
}

export default ShareButton;
