import "./styles.css";
import useAPI from "./useAPI";

export default function App() {
  const api = "https://jsonplaceholder.typicode.com/users";
  const get = useAPI(api);
  console.log(get);

  return (
    <div className="App">
      <h2>Crud</h2>
      <button>Add</button>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>website</th>
            <th>Action</th>
          </tr>
          {get?.map((item, index) => {
            return (
              <tr>
                <td>{item?.id}</td>
                <td>{item?.name}</td>
                <td>{item?.username}</td>
                <td>{item?.email}</td>
                <td>{item?.website}</td>
                <td>
                  <button>Edit</button>
                  <button>Delelte</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>{get?.title}</h1>
    </div>
  );
}
