// 인풋 포커싱 오류가 계속 발생하여 일단 전부 주석처리 합니다.

// "use client";

// import { useTestFunnel } from "../../libs/hooks/useTestFunnel";
// import FunnelInput from "./FunnelInput";
// import { form_card } from "@/styles/form.css";
// import { useInput } from "@/libs/hooks/useInput";
// import { useState } from "react";
// import { testValidate } from "@/utils/testValidate";
// import { useEffect } from "react";
// import NameFunnel from "./NameFunnel";

// export default function Funnel() {
//   const [step, stepIndex, Funnel, onNextStepHandler, onPreviousStepHandler] =
//     useTestFunnel(
//       ["Username", "Email", "Password", "Success"] as const,
//       "Username"
//     );

//   const nextHandler = (validateType: string, value: string) => {
//     if (testValidate(validateType, value)) {
//       // 다음 스텝으로 진행
//       // setAnimation("slideOut");
//       // setTimeout(() => {
//       //   setAnimation("slideIn");
//       // }, 300);
//       onNextStepHandler();
//     }
//   };

//   // 인풋값들을 하나로 묶어서 관리하려했는데 한글자 입력할때마다 포커싱을 잃는 문제가 발생합니다.
//   // const { inputState, inputHandler } = useInput({
//   //   username: {
//   //     value: "",
//   //   },
//   //   email: {
//   //     value: "",
//   //   },
//   //   password: {
//   //     value: "",
//   //   },
//   // });

//   // const [inputState, setInput] = useState({
//   //   username: {
//   //     value: "",
//   //   },
//   //   email: {
//   //     value: "",
//   //   },
//   //   password: {
//   //     value: "",
//   //   },
//   // });

//   // 이렇게 state값을 다 나눠서 관리해도 똑같이 포커싱 아웃 문제가 발생합니다.
//   // const [usernameValue, setUserNameValue] = useState("");
//   // const [emailValue, setEmailValue] = useState("");
//   // const [passwordValue, setPasswordValue] = useState("");

//   // const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const { id, value } = e.target;

//   //   console.log(id);
//   //   setInput((prevState) => ({
//   //     ...prevState,
//   //     [id]: { value: value },
//   //   }));
//   // };

//   return (
//     <div className={form_card}>
//       {/* <Funnel>
//       // 이 Funnel.Step 컴포넌트가 있고 없고에서 문제가 갈립니다.
//         <Funnel.Step name="Username"> */}
//       {/* <NameFunnel
//         step={step}
//         stepIndex={stepIndex}
//         type={"text"}
//         validateType={"name"}
//         onNext={nextHandler}
//         value={usernameValue}
//         id={step.toLowerCase()}
//         inputHandler={(e: React.ChangeEvent<HTMLInputElement>) =>
//           setUserNameValue(e.target.value)
//         }
//       /> */}
//       {/* </Funnel.Step>
//        */}
//       {/* <Funnel.Step name="Email">
//           <FunnelInput
//             step={step}
//             type={"email"}
//             stepIndex={stepIndex}
//             validateType={"email"}
//             onNext={nextHandler}
//             onPrevious={onPreviousStepHandler}
//             value={inputState.email.value}
//             id={step.toLowerCase()}
//             inputHandler={inputHandler}
//           />
//         </Funnel.Step>
//         <Funnel.Step name="Password">
//           <FunnelInput
//             step={step}
//             type={"password"}
//             stepIndex={stepIndex}
//             validateType={"password"}
//             onNext={nextHandler}
//             onPrevious={onPreviousStepHandler}
//             value={inputState.password.value}
//             id={step.toLowerCase()}
//             inputHandler={inputHandler}
//           />
//         </Funnel.Step> */}
//       {/* <Funnel.Step name="Success">
//           <div>성공</div>
//         </Funnel.Step> */}
//       {/* </Funnel> */}
//     </div>
//   );
// }
