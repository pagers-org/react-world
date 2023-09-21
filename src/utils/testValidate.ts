import Toast from "@/components/composables/Toastify/Toast";

export const testValidate = (validateType: string, value: string) => {
  console.log(value);
  // 이름 유효성 검사
  if (validateType === "name") {
    if (!value) {
      Toast.error("이름은 필수 값이에요!");
      console.log("이름은 필수 값이에요!");
      return;
    }

    if (/\s/.test(value.toString())) {
      Toast.error("공백이 포함 되어있어요!");
      console.log("공백이 포함 되어있어요!");
      return;
    }
  }

  // 비밀번호 유효성 검사
  if (validateType === "password") {
  }

  // 이메일 유효성 검사
  if (validateType === "email") {
  }

  // 닉네임 유효성 검사

  if (validateType === "nickname") {
  }

  // 전화번호 유효성 검사
  if (validateType === "phoneNumber") {
  }

  return true;
};
