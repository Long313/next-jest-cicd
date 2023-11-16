"use client";
import Image from "next/image";
import cat from "../../../../public/cat.jpg";
import { useState, useEffect } from "react";

interface TypeTextError {
  userName: string;
  password: string;
  repeatPassword: string;
  email: string;
  langCode: string;
  [key: string]: any;
}

export default function FormSignUp(props: any) {
  const [userName, setUserName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [postCode, setPostCode] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [langCode, setLangCode] = useState<string>("");
  const [textError, setTextError] = useState<TypeTextError>({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    repeatPassword: "",
    email: "",
    langCode: "",
    postCode: "",
    number: "",
    phone: "",
  });
  const [status, setStatus] = useState(true);

  const handleGetUserName = (e: any) => {
    setTextError({
      ...textError,
      userName: "",
    });
    setUserName(e.target.value);
  };
  let userNameRegex = /^[a-zA-Z0-9]{4,8}$/;
  const handleCheckUserName = () => {
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
  let name = /^[a-zA-Z0-9\s]{4,8}$/;
  const handleGetFirstName = (e: any) => {
    setTextError({
      ...textError,
      firstName: "",
    });
    setFirstName(e.target.value);
  };
  const handleCheckFirstName = () => {
    if (name.test(firstName)) {
      setTextError({
        ...textError,
        firstName: "",
      });
    } else {
      setTextError({
        ...textError,
        firstName:
          "First name is 4 to 8 characters consisting of letters or numbers. And no special characters",
      });
    }
  };

  const handleGetLastName = (e: any) => {
    setTextError({
      ...textError,
      lastName: "",
    });
    setLastName(e.target.value);
  };
  const handleCheckLastName = () => {
    if (name.test(lastName)) {
      setTextError({
        ...textError,
        lastName: "",
      });
    } else {
      setTextError({
        ...textError,
        lastName:
          "Last name is 4 to 8 characters consisting of letters or numbers. And no special characters",
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

  const handleGetLangCode = (e: any) => {
    setTextError({
      ...textError,
      language: "",
    });
    setLangCode(e.target.value);
  };

  const handleCheckLangCode = () => {
    if (langCode) {
      setTextError({
        ...textError,
        langCode: "",
      });
    } else {
      setTextError({
        ...textError,
        langCode: "Please choose a language",
      });
    }
  };
  const handleGetPostCode = (e: any) => {
    setTextError({
      ...textError,
      postCode: "",
    });
    setPostCode(e.target.value);
  };

  const handleCheckPostCode = () => {
    if (postCode) {
      setTextError({
        ...textError,
        postCode: "",
      });
    } else {
      setTextError({
        ...textError,
        postCode: "Please choose a postcode",
      });
    }
  };

  const handleGetNumber = (e: any) => {
    setTextError({
      ...textError,
      number: "",
    });
    setNumber(e.target.value);
  };
  let numberRegex = /^[0-9]{8,10}$/;
  const handleCheckNumber = () => {
    if (numberRegex.test(number)) {
      console.log("type", typeof number);
      setTextError({
        ...textError,
        number: "",
      });
      setPhone(postCode + number);
    } else {
      setTextError({
        ...textError,
        number: "Number is 8 to 10 characters consisting of numbers.",
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
      firstName,
      lastName,
      password,
      repeatPassword,
      email,
      langCode,
      phone,
    });
  };
  useEffect(() => {
    if (
      userName &&
      firstName &&
      lastName &&
      password &&
      repeatPassword &&
      email &&
      langCode &&
      postCode &&
      number &&
      phone
    ) {
      console.log("check");
      checkFormValid();
    }
  }, [
    userName,
    firstName,
    lastName,
    password,
    repeatPassword,
    email,
    langCode,
    postCode,
    number,
    phone,
  ]);
  const { submit } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="w-2/12 min-h-[950px] h-4/5 bg-gray-400 rounded-[20px] overflow-hidden"
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
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.userName}
          </p>
        </div>
        <div className="w-full">
          <label
            htmlFor="firstName"
            className="inline-block mt-[30px] mb-[10px]"
          >
            FirstName
          </label>
          <input
            value={firstName}
            onChange={handleGetFirstName}
            placeholder="Enter a Username"
            id="firstName"
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            onBlur={handleCheckFirstName}
          />
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.firstName}
          </p>
        </div>
        <div className="w-full">
          <label
            htmlFor="lastName"
            className="inline-block mt-[30px] mb-[10px]"
          >
            LastName
          </label>
          <input
            value={lastName}
            onChange={handleGetLastName}
            placeholder="Enter a FirstName"
            id="lastName"
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            onBlur={handleCheckLastName}
          />
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.lastName}
          </p>
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
        <div className="w-full">
          <label
            htmlFor="repeat-password"
            className="inline-block mt-[30px] mb-[10px]"
          >
            Repeat Password
          </label>
          <input
            value={repeatPassword}
            onChange={handleGetRepeatPassword}
            placeholder="Repeat password"
            id="repeat-password"
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            type="password"
            onBlur={handleCheckRepeatPassword}
          />
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.repeatPassword}
          </p>
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
          <label htmlFor="" className="inline-block mt-[30px] mb-[10px]">
            Language
          </label>
          <select
            className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
            value={langCode}
            onChange={handleGetLangCode}
            onBlur={handleCheckLangCode}
          >
            <option value="">Choose a language</option>
            <option value="eng">English</option>
            <option value="vie">VietNamese</option>
            <option value="kor">Korean</option>
            <option value="jap">Japanes</option>
            <option value="chi">Chinese</option>
          </select>
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.langCode}
          </p>
        </div>
        <div className="w-full">
          <label htmlFor="" className="inline-block mt-[30px] mb-[10px]">
            Phone Number
          </label>
          <div className="flex">
            <select
              className="border border-blue-300 w-2/5 p-[5px] rounded-[5px] outline-none"
              value={postCode}
              onChange={handleGetPostCode}
              onBlur={handleCheckPostCode}
            >
              <option value="">Choose a region</option>
              <option value="+1">+1 ( USA )</option>
              <option value="+44">+44 ( English )</option>
              <option value="+84">+84 ( VietNam )</option>
              <option value="+82">+82 (Korean)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+86">+86 (China)</option>
            </select>
            <input
              value={number}
              onChange={handleGetNumber}
              placeholder="Enter a phone number"
              id="number"
              className="border border-blue-300 w-full p-[5px] rounded-[5px] outline-none"
              type="text"
              onBlur={handleCheckNumber}
            />
          </div>
          <p className="text-red-400 text-[12px] mt-[2px]">
            {textError.postCode || textError.number || textError.phoneNumber}
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
            Signup
          </button>
        </div>
      </div>
    </form>
  );
}
