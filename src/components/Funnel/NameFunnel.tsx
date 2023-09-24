// import FunnelCard from "../composables/Card/FunnelCard";

// import {
//   form_logo,
//   toggle_form_state,
//   toggle_text,
//   form_button_container,
//   form_button,
// } from "@/styles/form.css";
// import { color_state } from "@/styles/container.css";
// import { only_next_button } from "../../styles/funnel.css";
// import { input_container, input } from "@/styles/input.css";
// import Input from "../composables/Input/Input";

// type FunnelInputType = {
//   step: string;
//   stepIndex: number;
//   type: string;
//   validateType: string;
//   onNext?: (validateType: string, value: string) => void;
//   onPrevious?: () => void;
//   value: string;
//   id: string;
//   inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
// };

// export default function NameFunnel({
//   step,
//   stepIndex,
//   type,
//   onNext,
//   value,
//   validateType,
//   id,
//   onPrevious,
//   inputHandler,
// }: FunnelInputType) {
//   return (
//     <>
//       <FunnelCard>
//         <h1 className={form_logo}>{step}</h1>

//         <div className={toggle_form_state}>
//           <p className={`${toggle_text} ${color_state}`}>Have an account?</p>
//         </div>

//         <Input
//           type={type}
//           placeholder={step}
//           id={id}
//           value={value}
//           onChange={inputHandler}
//         />
//         <div className={form_button_container}>
//           <button
//             onClick={() => onNext && onNext(validateType, value)}
//             className={`${only_next_button} ${color_state}`}
//           >
//             Next
//           </button>
//           {stepIndex > 0 && (
//             <button
//               onClick={onPrevious}
//               className={`${form_button} ${color_state}`}
//             >
//               Previous
//             </button>
//           )}
//         </div>
//       </FunnelCard>
//     </>
//   );
// }
