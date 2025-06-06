const items = [
  {
    task: "Первый",
    icon: "123",
    isCompleted: true,
  },
  {
    task: "Второй",
    icon: "345",
    isCompleted: true,
  },
  {
    task: "Третий",
    icon: "678",
    isCompleted: false,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.icon}</span>
            <h4>{item.task}</h4>
          </section>
        );
      })}
    </div>
  );
};
