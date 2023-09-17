type Props = {
  content: string;
};

export const Content = ({ content }: Props) => {
  return (
    <div>
      <p className="whitespace-pre-wrap text-base font-normal text-zinc-950">{symbolizeNextLine(content)}</p>
    </div>
  );
};

const symbolizeNextLine = (text: string): string => text.replace(/\\n/g, "\n");
