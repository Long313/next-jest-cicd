"use client";

import Image from "next/image";
import cat from "../../../public/cat.jpg";
import vietNamFlag from "../../../public/vn.png";
import { useState } from "react";

interface TypeError {
  userName: boolean;
  password: boolean;
  repeatPassword: boolean;
  email: boolean;
  language: boolean;
}
interface TypeTextError {
  userName: string;
  password: string;
  repeatPassword: string;
  email: string;
  language: string;
}
export default function SignUp() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [error, setError] = useState<TypeError>({
    userName: false,
    password: false,
    repeatPassword: false,
    email: false,
    language: false,
  });
  const [textError, setTextError] = useState<TypeTextError>({
    userName: "",
    password: "",
    repeatPassword: "",
    email: "",
    language: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({
      userName,
      password,
      repeatPassword,
      email,
      language,
    });
  };
  const handleGetUserName = (e: any) => {
    setUserName(e.target.value);
  };
  const handleCheckUserName = () => {
    let userNameRegex = /^[a-zA-Z0-9]{4,8}$/;
    if (userNameRegex.test(userName)) {
      setTextError({
        ...textError,
        userName: "",
      });
    } else {
      setTextError({
        ...textError,
        userName:
          "Username is 4 to 8 characters consisting of letters or numbers. And no special characters",
      });
    }
  };
  return (
    <main className="flex justify-center items-center w-full h-full">
      <form
        onSubmit={handleSubmit}
        className="w-2/12 h-[700px] bg-gray-400 rounded-[20px] overflow-hidden"
      >
        <div className="w-full h-full bg-white flex flex-col justify-center items-center p-[20px]">
          <div className="w-5/12 h-5/12 rounded-full overflow-hidden">
            <Image
              src={cat}
              alt="cat astronaut"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="userName"
              className="inline-block mt-[30px] mb-[10px]"
            >
              UserName
            </label>
            <input
              value={userName}
              onChange={handleGetUserName}
              placeholder="Enter a Username"
              id="userName"
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              onBlur={handleCheckUserName}
            />
            <p>{textError.userName}</p>
          </div>
          <div className="w-full">
            <label
              htmlFor="password"
              className="inline-block mt-[30px] mb-[10px]"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter a password"
              id="password"
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              type="password"
            />
            <p>{textError.password}</p>
          </div>
          <div className="w-full">
            <label
              htmlFor="repeat-password"
              className="inline-block mt-[30px] mb-[10px]"
            >
              Repeat Password
            </label>
            <input
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="Repeat password"
              id="repeat-password"
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              type="password"
            />
            <p>{textError.repeatPassword}</p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="inline-block mt-[30px] mb-[10px]">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a Email"
              id="email"
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              type="email"
            />
            <p>{textError.email}</p>
          </div>
          <div className="w-full">
            <label htmlFor="" className="inline-block mt-[30px] mb-[10px]">
              Language
            </label>
            <select
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="">Choose a language</option>
              <option value="eng">English</option>
              <option value="vie">VietNam</option>
              <option value="kor">Korean</option>
            </select>
            <p>{textError.email}</p>
          </div>
          <div className="w-full mt-[20px]">
            <button
              type="submit"
              className="bg-blue-400 text-white w-full rounded-[5px] p-[10px]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
