import {
  spinner_container,
  loading_spinner,
} from "@/styles/loading_spinner.css";
import { color_state } from "@/styles/container.css";

export default function LoadingSpinner() {
  return (
    <div className={`${spinner_container} ${color_state}`}>
      <div className={`${loading_spinner} ${color_state}`}></div>
    </div>
  );
}
