import cls from "./QuestionCard.module.css";
import { Button } from "../Button";

export const QuestionCard = () => {
  return (
    <div className={cls.card}>
      <div className={cls.cardLabels}>
        <div>Level: 1</div>
        <div>Not completed</div>
      </div>

      <h5 className={cls.cardTitle}>Title</h5>

      <div className={cls.cardAnswers}>
        <label>Short answer</label>
        <p className={cls.cardAnswer}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          iste?
        </p>
      </div>

        <Button>View</Button>
    </div>
  );
};
