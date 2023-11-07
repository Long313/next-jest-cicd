"use client";
import Image from "next/image";
import cat from "../../../../public/cat.jpg";
import { useState, useEffect } from "react";

interface TypeTextError {
  userName: string;
  password: string;
  repeatPassword: string;
  email: string;
  language: string;
  [key: string]: any;
}

export default function FormLogin(props: any) {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  const [textError, setTextError] = useState<TypeTextError>({
    userName: "",
    password: "",
    repeatPassword: "",
    email: "",
    language: "",
  });
  const [status, setStatus] = useState(true);

  const handleGetUserName = (e: any) => {
    setTextError({
      ...textError,
      userName: "",
    });
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

  const handleGetPassword = (e: any) => {
    setTextError({
      ...textError,
      password: "",
    });
    setPassword(e.target.value);
  };

  let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,10}$/;
  const handleCheckPassword = () => {
    if (passwordRegex.test(password)) {
      setTextError({
        ...textError,
        password: "",
      });
    } else {
      setTextError({
        ...textError,
        password:
          "Password must contain 6 to 10 characters including one number, one uppercase character and one lowercase character",
      });
    }
  };

  const handleGetRepeatPassword = (e: any) => {
    setTextError({
      ...textError,
      repeatPassword: "",
    });
    setRepeatPassword(e.target.value);
  };

  const handleCheckRepeatPassword = () => {
    if (password === repeatPassword && passwordRegex.test(repeatPassword)) {
      setTextError({
        ...textError,
        repeatPassword: "",
      });
    }
    if (!passwordRegex.test(repeatPassword)) {
      setTextError({
        ...textError,
        repeatPassword:
          "Password must contain 6 to 10 characters including one uppercase character and one special character",
      });
    }
    if (password !== repeatPassword && passwordRegex.test(repeatPassword)) {
      setTextError({
        ...textError,
        repeatPassword: "The repeat password must be the same as the password",
      });
    }
  };

  const handleGetEmail = (e: any) => {
    setTextError({
      ...textError,
      email: "",
    });
    setEmail(e.target.value);
  };

  const handleCheckEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      setTextError({
        ...textError,
        email: "",
      });
    } else {
      setTextError({
        ...textError,
        email: "Please enter a valid email",
      });
    }
  };

  const handleGetLanguage = (e: any) => {
    setTextError({
      ...textError,
      language: "",
    });
    setLanguage(e.target.value);
  };

  const handleCheckLanguage = () => {
    if (language) {
      setTextError({
        ...textError,
        language: "",
      });
    } else {
      setTextError({
        ...textError,
        language: "Please choose a language",
      });
    }
  };
  const checkFormValid = () => {
    for (let key in textError) {
      const value = textError[key];
      console.log(`Key: ${key}, Value: ${value}`);
      if (value) {
        setStatus(true);
      }
    }
    return setStatus(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    submit({
      userName,
      password,
      repeatPassword,
      email,
      language,
    });
  };
  useEffect(() => {
    if (userName && password && repeatPassword && email && language) {
      checkFormValid();
    }
  }, [userName, password, repeatPassword, email, language]);
  const { submit } = props;
  return (
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
          <label htmlFor="email" className="inline-block mt-[30px] mb-[10px]">
            Email
          </label>
          <input
            value={email}
            onChange={handleGetEmail}
            placeholder="Enter a Email"
            id="email"
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            type="email"
            onBlur={handleCheckEmail}
          />
          <p className="text-red-400 text-[12px] mt-[2px]">{textError.email}</p>
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
            onChange={handleGetPassword}
            placeholder="Enter a password"
            id="password"
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            type="password"
            onBlur={handleCheckPassword}
          />
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.password}
          </p>
        </div>
        <div className="w-full mt-[20px]">
          <button
            type="submit"
            className={`bg-blue-400 text-white w-full rounded-[5px] p-[10px] ${
              status ? "opacity-50" : ""
            }`}
            disabled={status}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
