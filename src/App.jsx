
import ClassCount from './Components/ClassCount';
import FonctionCount from './Components/FonctionCount';
import Todo from './Components/Todo';



function App() {

    const [user, setUser] = useState({
        name: "Lisa",
        age: 8,
    });

    return (
        <div className="container text-center mt-4">
            <h1>To-do list App</h1>
           <div className="container mt-4">
                {/* <Todo /> */}
                {/* <ClassCount /> */}
                {/* <FonctionCount /> */}
                <Profile />
            </div>
        </div>
    );
}
export default App;