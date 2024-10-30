import Column from './Column';
 
// Board with New, Active, Closed, and Resolved columns
function Board() {
  return (
    <div className="board-container">
      <Column title="New" />
      <Column title="Active" />
      <Column title="Resolved" />
      <Column title="Closed" />
    </div>
  );
}

export default Board;