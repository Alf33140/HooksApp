
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
const incrementCount1 = (val) => {
    console.log('je suis ds incrementCount1')
    count1.value < 100 && setCount1({...count1, value: count1.value + val});
};
const incrementCount2 = (val) => {
    count2.value < 100 && setCount2({...count2, value: count2.value + val});
    console.log('je suis ds incrementCount1')
};

const [count1, setCount1] = useState({value: 0, btnColor: 'success', increment: 25});
const [count2, setCount2] = useState({value: 0, btnColor: 'danger', increment: 20});

    return (
        <div className="container text-center mt-4">

            <ProgressBar count={count1.value} bgColor={count1.btnColor} />
            <ProgressBar count={count2.value} bgColor={count2.btnColor} />

            <Button handleClick={incrementCount1} btnColor={count1.btnColor} increment={count1.increment}>Count 1</Button>
            <Button handleClick={incrementCount2} btnColor={count2.btnColor} increment={count2.increment}>Count 2</Button>

            <h1>To-do list App</h1>
           <div className="container mt-4">
                {/*{} <Todo /> */}
                {/* <ClassCount /> */}
                {/* <FonctionCount /> */}
                {/* <UserContext.Provider value= {user}>
                    <ColorContext.Provider value= {"red"}>
                        <Profile />
                    </ColorContext.Provider>
                </UserContext.Provider> */}
                {/* <CountReducer />  */}
                <button btnColor={count1.btnColor} increment={count1.increment}>Count 1</button>
                <ProgressBar text="count1" count={count1.value} bgColor={count1.btnColor} />

                <button btnColor={count2.btnColor} increment={count2.increment}>Count 2</button>
                <ProgressBar text="count2" count={count2.value} bgColor={count2.btnColor} />
            </div>
        </div>
    );
}
export default App;