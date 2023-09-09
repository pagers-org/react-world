import { skeleton } from "./Skeleton.css";

type Variant = "circular" | "rectangular" | "rounded" | "text";
interface SkeletonProps {
  variant: Variant;
  className?: string;
}

const Skeleton = (props: SkeletonProps) => {
  const { className = "", variant = "rectangular" } = props;

  return <div className={`${skeleton[variant]} ${className}`}></div>;
};

export default Skeleton;
