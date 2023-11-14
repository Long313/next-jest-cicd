"use client";

import FormLogin from "@/components/Form/FormLogin";
import { LOGIN_API } from "@/constant";
import { loginUser } from "@/redux/apiRequest";
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';

export default function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogin = async (data: any) => {
    console.log("login", data);
    loginUser(data,dispatch,router)
  };
  return (
    <main className="flex justify-center items-center w-full h-full">
      <FormLogin submit={handleLogin} />
    </main>
  );
}
