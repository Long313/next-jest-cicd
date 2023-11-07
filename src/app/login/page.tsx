"use client";

import FormLogin from "@/components/Form/FormLogin";

export default function SignIn() {
  const handleLogin = async () => {};
  return (
    <main className="flex justify-center items-center w-full h-full">
      <FormLogin submit={handleLogin} />
    </main>
  );
}
