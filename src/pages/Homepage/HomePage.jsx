import { useState, useEffect} from "react";
import { API_URL } from "../../constants";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/usefetch";
import { SearchInput } from "../../components/SearchInput/SearchInput";
import cls from "./Homepage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  useEffect(() => {
    getQuestions("react");
  }, []);

  const onSearchChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
      <SearchInput value={searchValue} onChange={onSearchChangeHandler}/>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <QuestionCardList cards={questions} />
    </>
  );
};
