// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// MyPage 컴포넌트에서는 AuthContext에서 user를 가져와 로그인 상태에 따라 마이페이지 UI를 표시하거나
// 로그인이 필요함을 안내하는 메시지를 표시한다. 개인 정보 관리에 필요한 UI 및 기능을 추가하면 됨
const MyPage = () => {
  // const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <h2 className="text-[23px] font-bold">마이페이지</h2>
      <p className="mt-4">를 준비중입니다.</p>
    </div>
  );
};

export default MyPage;
