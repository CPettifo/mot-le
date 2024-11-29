const Board = ({ word }) => {
    return (
      <table id="board">
        {[...Array(6)].map((_, rowIndex) => (
          <tr key={rowIndex} className="row">
            {[...Array(5)].map((_, colIndex) => (
              <td key={colIndex} className="letterBox">
                {rowIndex === 0 ? word[colIndex] : ""}
              </td>
            ))}
          </tr>
        ))}
      </table>
    );
  };
  
  export default Board;
  