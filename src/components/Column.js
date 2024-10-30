import Card from './Card';

// Column setup
function Column({ title, tasks = [] }) {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Card key={index} task={task} />
      ))}
    </div>
  );
}

export default Column;