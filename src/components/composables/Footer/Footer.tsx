import { footer_container } from "@/styles/footer.css";
import { color_state } from "@/styles/container.css";

export default function Footer() {
  return (
    <div className={`${footer_container} ${color_state}`}>
      <span>
        An interactive learning project from{" "}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  );
}
