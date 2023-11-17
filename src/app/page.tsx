"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation("footer");
  const router = useRouter();
  const currentUser = useSelector((state: any) => state.auth.login.currentUser);
  if (currentUser) {
    const { user, token, refreshToken } = currentUser;
    localStorage.setItem("userInfor", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
  }
  useEffect(() => {
    const tokenString: string | null = localStorage.getItem("token");
    if (tokenString) {
      const token: string = JSON.parse(tokenString);
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <main className="">
      <h1 className="text-white">{t("hello")}</h1>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "footer"])),
    },
  };
}
