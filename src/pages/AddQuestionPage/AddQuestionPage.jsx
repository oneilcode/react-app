import cls from "./AddQuestionPage.module.css";
import { Button } from "../../components/Button";

export const AddQuestionPage = () => {
  return (
    <>
      <h1 className={cls.formTitle}>Add new question</h1>

      <div className={cls.formContainer}>
        <form action="" className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question:</label>
            <textarea
              defaultValue={"defaultValue"}
              name="question"
              id="questionField"
              cols="30"
              rows="2"
              required
              placeholder="Please enter your question"
            ></textarea>
          </div>

          <div className={cls.formControl}>
            <label htmlFor="answerField">Short answer:</label>
            <textarea
              defaultValue={"defaultValue"}
              name="answer"
              id="answerField"
              cols="30"
              rows="2"
              required
              placeholder="Please enter a short answer"
            ></textarea>
          </div>

          <div className={cls.formControl}>
            <label htmlFor="descriptionField">Description:</label>
            <textarea
              defaultValue={"defaultValue"}
              name="description"
              id="descriptionField"
              cols="30"
              rows="5"
              required
              placeholder="Please enter a full description"
            ></textarea>
          </div>

          <div className={cls.formControl}>
            <label htmlFor="resoursesField">Resourses:</label>
            <textarea
              defaultValue={"defaultValue"}
              name="resourses"
              id="resoursesField"
              cols="30"
              rows="5"
              required
              placeholder="Please enter resourses separated by commas"
            ></textarea>
          </div>

          <div className={cls.formControl}>
            <label htmlFor="levelField">Level:</label>
            <select name="level" id="levelField" defaultValue={"defaultValue"}>
              <option disabled>Question level</option>
              <hr />
              <option value="1">1 - easy</option>
              <option value="2">2 - meduim</option>
              <option value="3">3 - hard</option>
            </select>
          </div>

          <label htmlFor="clearFormField" className={cls.clearFormControl}>
            <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearFormField"  defaultValue={true}/>
            <span>Clear form after submitting</span>
          </label>

          <Button>Add question</Button>
        </form>
      </div>
    </>
  );
};
