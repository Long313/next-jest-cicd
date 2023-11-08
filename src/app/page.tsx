import { useAppSelector } from "@/redux/store";
import Image from "next/image";
// import skyNight from '../images/skyNight.png';
export default function Home() {
  const email = useAppSelector((state) => state.authReducer.email)

  return (
    <main className="bg-[url('../../public/skyNight.png')] w-full h-full">
      <h1 className="text-white">home page</h1>
    </main>
  );
}
