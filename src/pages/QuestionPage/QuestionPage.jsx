import { useEffect, useId, useState } from "react";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import cls from "./QuestionPage.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/usefetch";
import { API_URL } from "../../constants";
import { Loader, SmallLoader } from "../../components/Loader";
import { useAuth } from "../../hooks/useAuth";

const card = {
  id: "1",
  question: "Что такое React?",
  answer: "React — это библиотека для создания пользовательских интерфейсов.",
  description:
    "React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.",
  resources: ["https://react.dev", "https://react.dev/reference/react"],
  level: 1,
  completed: true,
  editDate: "03.02.2025, 19:49",
};

export const QuestionPage = () => {
  const checkboxId = useId();
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const { isAuth, setIsAuth } = useAuth();

  const levelVariant = () =>
    card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert";
  const completedVariant = () => (card.completed ? "success" : "primary");

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${id}`);
    const data = await response.json();

    setCard(data);
  });

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}/react/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: isChecked }),
    });

    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  useEffect(() => {
    card !== null && setIsChecked(card.completed);
  }, [card]);

  const onCheckboxChangehandler = () => {
    setIsChecked(!isChecked);
    updateCard(!isChecked);
  };

  return (
    <>
      {isCardLoading && <Loader />}

      {card !== null && (
        <div className={cls.container}>
          <div className={cls.cardLabels}>
            <Badge variant={levelVariant()}>Level: {card.level}</Badge>
            <Badge variant={completedVariant()}>
              {card.completed ? "Completed" : "Not completed"}
            </Badge>

            {card?.editDate && (
              <p className={cls.editDate}>Edites:{card.editDate}</p>
            )}
          </div>

          <h5 className={cls.cardTitle}>{card.question}</h5>
          <p className={cls.cardDescription}>{card.description}</p>

          <div className={cls.cardAnswers}>
            <label>Short answer</label>
            <p className={cls.cardAnswer}>{card.answer}</p>
          </div>

          <ul className={cls.cardLinks}>
            Resourses:
            {card.resources.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.trim()} target="_blank" rel="noreferrer">
                    {link.trim()}
                  </a>
                </li>
              );
            })}
          </ul>

          <label htmlFor={checkboxId} className={cls.cardCheckbox}>
            <input
              id={checkboxId}
              type="checkbox"
              className={cls.checkbox}
              checked={isChecked}
              onChange={onCheckboxChangehandler}
              disabled={isCardUpdating}
            />
            <span>mark question as complited</span>

            {isCardUpdating && <SmallLoader />}
          </label>

          {isAuth && (
            <Button
              onClick={() => navigate(`/editquestion/${card.id}`)}
              isDisabled={isCardUpdating}
            >
              Edit question
            </Button>
          )}

          <Button onClick={() => navigate("/")} isDisabled={isCardUpdating}>
            Back
          </Button>
        </div>
      )}
    </>
  );
};
