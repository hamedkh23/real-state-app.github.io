"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Loader from "@/module/Loader";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز با تکرار آن برابر نیست");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-[#304ffe] font-semibold text-4xl mb-5">
        فرم ثبت نام
      </h4>
      <form className="flex flex-col max-w-[700px] shadow-[0px_4px_15px] shadow-[#304ffe4a] border-2 border-solid border-[#304ffe] p-10 rounded-xl mb-8">
        <label className="text-[#304ffe] mb-2.5 font-normal">ایمیل:</label>
        <input
          dir="ltr"
          className="mb-10 w-64 border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-10 focus:border-[1px] focus:border-solid focus:border-[#304ffe] focus:outline-none"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-[#304ffe] mb-2.5 font-normal">رمز عبور:</label>
        <input
          dir="ltr"
          className="mb-10 w-64 border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-10 focus:border-[1px] focus:border-solid focus:border-[#304ffe] focus:outline-none"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="text-[#304ffe] mb-2.5 font-normal">
          تکرار رمز عبور:
        </label>
        <input
          dir="ltr"
          className="mb-10 w-64 border-[1px] border-dashed border-[#304ffe] text-[#808080] rounded-md p-2.5 text-base h-10 focus:border-[1px] focus:border-solid focus:border-[#304ffe] focus:outline-none"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button
            className="border-none bg-[#304ffe] text-white text-xl font-normal rounded-md transition-all ease-in delay-100 cursor-pointer py-2 px-0 hover:scale-105"
            type="submit"
            onClick={signupHandler}
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-[#808080] text-lg">
        حساب کاربری دارید؟
        <Link
          className="text-[#304ffe] mr-2.5 border-b-2 border-[#808080]"
          href="/signin"
        >
          ورود
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
