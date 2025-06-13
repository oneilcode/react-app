import cls from "./AddQuestionPage.module.css";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
import { delayFn } from "../../helpers/delay";
import { useActionState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";

const createCardAction = async (_prevState, formData) => {
  try {
    await delayFn();

    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resourses.trim();
    const isClearForm = newQuestion.clearForm;

    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: undefined,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const question = response.json();
    toast.success("New question was created");
    console.log(formData);

    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
    return {};
  }
};

const AddQuestionPage = () => {
  const [formState, formAction, isPending] = useActionState(createCardAction, {
    clearForm: true,
  });

  return (
    <>
      {isPending && <Loader />}

      <h1 className={cls.formTitle}>Add new question</h1>

      <div className={cls.formContainer}>
        <form action={formAction} className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question:</label>
            <textarea
              defaultValue={formState.question}
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
              defaultValue={formState.answer}
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
              defaultValue={formState.description}
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
              defaultValue={formState.resources}
              name="resourses"
              id="resoursesField"
              cols="30"
              rows="5"
              placeholder="Please enter resourses separated by commas"
            ></textarea>
          </div>

          <div className={cls.formControl}>
            <label htmlFor="levelField">Level:</label>
            <select name="level" id="levelField" defaultValue={formState.level}>
              <option disabled>Question level</option>
              <hr />
              <option value="1">1 - easy</option>
              <option value="2">2 - meduim</option>
              <option value="3">3 - hard</option>
            </select>
          </div>

          <label htmlFor="clearFormField" className={cls.clearFormControl}>
            <input
              className={cls.checkbox}
              type="checkbox"
              name="clearForm"
              id="clearFormField"
              defaultChecked={formState.clearForm}
            />
            <span>Clear form after submitting</span>
          </label>

          <Button isDisabled={isPending}>Add question</Button>
        </form>
      </div>
    </>
  );
};

export default AddQuestionPage;
