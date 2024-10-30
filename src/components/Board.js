import Column from './Column';
 
// Board with New, Active, Closed, and Resolved columns
function Board() {
    const initialTasks = {
      new: [{ title: 'Task 1' }, { title: 'Task 2' }],
      active: [{ title: 'Task 3' }],
      resolved: [{ title: 'Task 4' }],
      closed: [{ title: 'Task 5' }]
    };
  
    return (
      <div className="board-container">
        <Column title="New" tasks={initialTasks.new} />
        <Column title="Active" tasks={initialTasks.active} />
        <Column title="Resolved" tasks={initialTasks.resolved} />
        <Column title="Closed" tasks={initialTasks.closed} />
      </div>
    );
  }
  
  export default Board;