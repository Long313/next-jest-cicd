"use client";

import FormLogin from "@/components/Form/FormLogin";
import { LOGIN_API } from "@/constant";
import { loginUser } from "@/service/api";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  

  const handleLogin = async (data: any) => {
    console.log("login", data);
    const res = await loginUser(LOGIN_API, data);
    console.log("res123", res);
    try {
      if (res.status === 201) {
        router.push("/");
      }
    } catch (err: any) {
      throw new err();
    }
  };
  return (
    <main className="flex justify-center items-center w-full h-full">
      <FormLogin submit={handleLogin} />
    </main>
  );
}
