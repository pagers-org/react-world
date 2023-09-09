interface Props {
  src: string;
  className?: string;
  id: string;
}

const SvgIcon = ({ src, className = "", id }: Props) => {
  return (
    <svg className={`${className}`}>
      <use href={`${src}#${id}`} className={`${className}`} />
    </svg>
  );
};

export default SvgIcon;
