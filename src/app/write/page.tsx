import UserWrite from "@/components/Write/UserWrite";
import { headers } from "next/headers";

export default function WritePage() {
  const headerLists = headers();
  const isLoggedIn = headerLists.get("X-Token");
  let tokenValue;
  if (isLoggedIn) {
    tokenValue = isLoggedIn;
  }

  return (
    <>
      {isLoggedIn ? (
        <UserWrite tokenValue={tokenValue} />
      ) : (
        <div>페이지 접근 권한 X!</div>
      )}
    </>
  );
}
