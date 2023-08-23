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
      className={`w-full rounded-xl p-4 bg-green-100 shadow-md cursor-pointer overflow-hidden transition-all duration-500 linear ${
        actives.includes(index)
          ? "bg-green-200 max-h-[1000px]"
          : "max-h-24 md:max-h-20"
      }`}
    >
      <h2 className="text-xl mb-2 flex items-center p-2 gap-4">
        <BsQuestionCircleFill size={30} />
        {question}
        <IoIosArrowDown
          size={30}
          className={`${
            actives.includes(index) && "rotate-180"
          } transition-all duration-500 ease-in-out ms-auto`}
        />
      </h2>
      <p
        className={`${
          actives.includes(index) ? "max-h-[1000px]" : "max-h-0"
        } overflow-hidden py-2 px-4 transition-all duration-500 linear`}
      >
        {answer}
      </p>
    </div>
  );
};

export default Question;
