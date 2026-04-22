import { useEffect, useState } from 'react';
import Search from './Search';
import useUpdateDocTitle from '../Hooks/useUpdateDocTitle';
import TableUsers from './TableUsers';


const MyContact = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [resultSearch, setResultSearch] = useState([]);
   
    const filterUsers = () => {
        const foundUsers = users.filter(
            user =>{
            // console.log(Object.values(user));    

                return Object.values(user)
                .join('')
                .toLowerCase()
                .includes(search.toLowerCase())
            })
        setResultSearch(foundUsers);
        }
    

    useEffect(() => {
        if (search !== '') {
            filterUsers();
        } else {
            setResultSearch([]);
        }
    }, [search]);
    const handleChange = e => {
        setSearch(e.target.value);
    };

    // console.log(users);

    const msgDisplay = (msg, color) => {
        return (
        <p style={{textAlign: "center", color: color}}>{msg}</p>
        );
    };


        useUpdateDocTitle(search);
        // console.log(search);
//mise en place d une connexion API pour récupérer les contacts en fonction de la recherche
// exemple avec une librairie AXIOS( a installer pour pour pouvoir fonctionner)
// useEffect(() => {
//     axios.get(api/user)
//     .then(setUser)
//     .catch(
//         error => setError(error.message))
// },[])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(json => {
                setUsers(json);
                setIsLoading(false);
            
            })
            .catch(error => {
                console.log(error.message);
            });
    },[]);


    // const handleChange = e => {
    //     setSearch(e.target.value);
    // };

    return (
            <>
                {isLoading ? msgDisplay('Veuillez patienter...', 'red') : (
                    <Search
                        searchStr={search}
                        searchhandler={handleChange}
                    />
                )}
                {
                resultSearch.length === 0 && search!=='' ?msgDisplay('Pas de résultats')
                : (
                    search === ''? null
               
                    :   <TableUsers dataArray={resultSearch} 
                        />
                 )

                }
            </>
        );
};

export default MyContact;