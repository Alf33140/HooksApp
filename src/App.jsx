
import ClassCount from './Components/ClassCount';
import FonctionCount from './Components/FonctionCount';
import Todo from './Components/Todo';
import {UserContext,ColorContext} from './Components/MyContext';
import { useState } from 'react';
import Profile from './Components/Profile';



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
                <UserContext.Provider value= {user}>
                    <ColorContext.Provider value= {"red"}>
                        <Profile />
                    </ColorContext.Provider>
                </UserContext.Provider>
            </div>
        </div>
    );
}
export default App;