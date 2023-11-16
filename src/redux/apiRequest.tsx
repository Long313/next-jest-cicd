import { login } from "@/service/api";
import { loginFailed, loginStart, loginSuccess } from "./features/authSlice";
import { LOGIN_API } from "@/constant";

export const loginUser = async (user: object, dispatch: any, router: any) => {
  dispatch(loginStart());
  try {
    const res = await login(LOGIN_API, user);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("userInfor", JSON.stringify(res.data));
    router.push("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
