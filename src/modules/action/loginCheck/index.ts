export const LOGINSTATE = "header/LOGIN";
export const LOGINSTATE_SAGA = "header/LOGINSTATE_SAGA";
export const USERSTATE = "mypage/USERSTATE";
export const USERSTATE_SAGA = "mypage/USERSTATE_SAGA";
export const MODALSTATE = "LOGIN/MODAL";
export const MODALSTATE_SAGA = "LOGIN/MODAL_SAGA";

export const loginState = () => ({ type: LOGINSTATE });
export const loginStateSaga = () => ({ type: LOGINSTATE_SAGA });
export const userState = () => ({ type: USERSTATE });
export const userStateSaga = () => ({ type: USERSTATE_SAGA });
export const modalState = () => ({ type: MODALSTATE });
export const modalStateSaga = () => ({ type: MODALSTATE_SAGA });

type LoginCheckAction = ReturnType<
  typeof loginState | typeof userState | typeof modalState
>;

export default LoginCheckAction;
