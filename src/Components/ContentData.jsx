import { UserContext,ColorContext } from "./MyContext";
import { useContext } from "react";
const ContentData = () => {

const user = useContext(UserContext);
const color = useContext(ColorContext);

    return (
        // <UserContext.Consumer>
        //     {
        //         user => {
        //             return (
        //                 <ColorContext.Consumer>
        //                     {
        //                         color => {
        //                             return (
                                        <div className="text-center" style={{ color: color }}>
                                            <ul>
                                                <li>Nom: {user.name}</li>
                                                <li>Age: {user.age}</li>
                                            </ul>
                                        </div>
                                    )
                                }
        //                     }
        //                 </ColorContext.Consumer> 
        //             )        
        //         }
        //     }             
        // </UserContext.Consumer>
        // <div className="text-center">
        //     <ul>
        //         <li>Nom:</li>
        //         <li>Age:</li>
                
        //     </ul>
        // </div>
    // )
// }

export default ContentData