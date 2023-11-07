"use client";

import { useState, useEffect } from "react";
import FormSignUp from "@/components/Form/FormRegister";
import { useRouter } from "next/navigation";
import { registerUser } from "../../service/api";
import { REGISTER_API, STATUS_SUCCESS } from "../../constant";

interface TypeData {
  repeatPassword: string;
}

export default function SignUp() {
  const router = useRouter();
  const handleRegister = async (data: TypeData) => {
    console.log("form data", data);
    const { repeatPassword, ...params } = data;
    const res = await registerUser(REGISTER_API, params);
    console.log("Res", res);
    try {
      if (res.status === STATUS_SUCCESS) {
        router.push("/login");
      }
    } catch (err: any) {
      throw new err();
    }
  };
  return (
    <main className="flex justify-center items-center w-full h-full">
      <FormSignUp submit={handleRegister} />
    </main>
  );
}
