// 인풋 포커싱 문제가 계속 발생하여 일단 주석처리 해놓겠습니다.

// import { Children, ReactNode, isValidElement, useState } from "react";

// import { useEffect } from "react";

// interface FunnelProps<T extends readonly string[]> {
//   step: T[number];
//   children: ReactNode;
// }

// interface StepProps<T extends readonly string[]> {
//   name: T[number];
//   children?: ReactNode;
// }

// const Funnel = <T extends readonly string[]>({
//   step,
//   children,
// }: FunnelProps<T>) => {
//   const validElement = Children.toArray(children).filter(isValidElement);
//   const targetElement = validElement.find(
//     (child) => (child.props as StepProps<T>)?.name === step
//   );

//   if (!targetElement) {
//     return null;
//   }

//   return <>{targetElement}</>;
// };

// const Step = <T extends readonly string[]>({ children }: StepProps<T>) => {
//   return <>{children}</>;
// };

// export const useTestFunnel = <T extends readonly string[]>(
//   steps: T,
//   defaultStep: T[number]
// ) => {
//   const [step, setStep] = useState(defaultStep);
//   const [stepIndex, setStepIndex] = useState<number>(0);

//   const onNextStepHandler = () => {
//     setStepIndex((prevStepIndex) => prevStepIndex + 1);
//     setStep(steps[stepIndex + 1]);
//   };

//   const onPreviousStepHandler = () => {
//     setStepIndex((prevStepIndex) => prevStepIndex - 1);
//     setStep(steps[stepIndex - 1]);
//   };

//   useEffect(() => {
//     console.log(stepIndex);
//   }, [stepIndex]);

//   const FunnelElement = Object.assign(
//     (props: Omit<FunnelProps<T>, "step">) => {
//       return <Funnel step={step} {...props} />;
//     },
//     { Step: (props: StepProps<T>) => <Step<T> {...props} /> }
//   );

//   return [
//     step,
//     stepIndex,
//     FunnelElement,
//     onNextStepHandler,
//     onPreviousStepHandler,
//   ] as const;
// };
