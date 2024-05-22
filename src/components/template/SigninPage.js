"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "react-hot-toast";
import Loader from "@/module/Loader";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-[#304ffe] font-semibold text-4xl mb-5">فرم ورود</h4>
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
        {loading ? (
          <Loader />
        ) : (
          <button
            className="border-none bg-[#304ffe] text-white text-xl font-normal rounded-md transition-all ease-in delay-100 cursor-pointer py-2 px-0 hover:scale-105"
            type="submit"
            onClick={signinHandler}
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-[#808080] text-lg">
        حساب کاربری ندارید؟
        <Link
          className="text-[#304ffe] mr-2.5 border-b-2 border-[#808080]"
          href="/signup"
        >
          ثبت نام
        </Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
