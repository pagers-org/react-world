import Text from "../components/Text";
import './page.css'
import { wrapper } from "./page.css";

export default function page() {
  return (
    <div className={wrapper}>
      <Text children="루트페이지" />
    </div>
  );
}
