import { BsQuestionCircleFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

interface QuestionProps {
  actives: number[];
  setActives: React.Dispatch<React.SetStateAction<number[]>>;
  question: string;
  answer: string;
  index: number;
}

const Question: React.FC<QuestionProps> = ({
  actives,
  setActives,
  question,
  answer,
  index,
}) => {
  return (
    <div
      onClick={() => {
        setActives((prev) => {
          if (prev.includes(index)) {
            return prev.filter((item) => item != index);
          }
          return [...prev, index];
        });
      }}
      className={`w-full rounded-xl px-6 py-4 bg-green-100 shadow-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${
        actives.includes(index) ? "bg-green-200" : ""
      }`}
    >
      <div
        className={`flex items-center -p-2 gap-4 transition-all duration-300 ease-in-out ${
          actives.includes(index) ? "mb-4" : "mb-0"
        }`}
      >
        <BsQuestionCircleFill size={30} />
        <h1 className="text-xl w-full">{question}</h1>
        <IoIosArrowDown
          size={30}
          className={`${
            actives.includes(index) && "rotate-180"
          } transition-all duration-500 ease-in-out ms-auto`}
        />
      </div>
      <p
        className={`${
          actives.includes(index)
            ? "max-h-[1000px] opacity-100"
            : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Question;
