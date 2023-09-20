
interface Props {
  className?: string;
  content: string;
}

export default function Button({ className, content }: Props) {
    return (
        <button className={className} type="submit">
          {content}
        </button>
    );
}