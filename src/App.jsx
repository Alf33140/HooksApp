
import ClassCount from './Components/ClassCount';
import FonctionCount from './Components/FonctionCount';
import Todo from './Components/Todo';
import {UserContext,ColorContext} from './Components/MyContext';
import { useState } from 'react';
import Profile from './Components/Profile';
import CountReducer from './Components/CountReducer';
import Button from './Components/Button';
import ProgressBar from './Components/ProgressBar';


function App() {

    const [user, setUser] = useState({
        name: "Lisa",
        age: 8,
    });

const [count1, setCount1] = useState({value: 0, btnColor: 'success', increment: 25});
const [count2, setCount2] = useState({value: 0, btnColor: 'danger', increment: 20});


    return (
        <div className="container text-center mt-4">
            <h1>To-do list App</h1>
           <div className="container mt-4">
                {/* <Todo /> */}
                {/* <ClassCount /> */}
                {/* <FonctionCount /> */}
                {/* <UserContext.Provider value= {user}>
                    <ColorContext.Provider value= {"red"}>
                        <Profile />
                    </ColorContext.Provider>
                </UserContext.Provider> */}
                {/* <CountReducer />  */}
                <button>Count 1</button>
                <ProgressBar count = {count1.value} bgColor = {count1.btnColor} />
                <button>Count 2</button>
                <ProgressBar count = {count2.value} bgColor = {count2.btnColor} />
            </div>
        </div>
    );
}
export default App;