import { question, title } from '@/styles/account.css';

const FormHead = ({ titleText, questionText }: { titleText: string; questionText: string }) => {
  return (
    <>
      <div className={title}>{titleText}</div>
      <div className={question}>{questionText}</div>
    </>
  );
};

export default FormHead;
