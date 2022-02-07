import { TableItem } from "./TableItem";
export const Table = ({ list }) => {
  return (
    <div>
      <table>
        <tr>
          <th> GameName</th>
          <th> GameAuthor</th>
          <th> GamePrice</th>
          <th> GameTag</th>
          <th> GameForKids</th>
          <th> GameRating</th>
        </tr>
        {list.map((e, i) => (
          <TableItem {...e} key={i} />
        ))}
      </table>

    </div>
  );
};
