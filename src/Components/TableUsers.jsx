import React from 'react'



const TableUsers = ({dataArray}) => {


  return (
    
      <table className="tableUser" style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px' }}>
            <thead>
                <tr style={{ backgroundColor: '#f81a1a', padding: '12px', textAlign: 'center', color: 'white', border: '1px solid #ddd' }}>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataArray.map(({id, name, email, address}) =>{
                        return(
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{address.street} {address.suite} {address.city}</td>
                            </tr>
                            
                        )
                    }
                    )
                }
                
            </tbody>
      </table>
    
  )
}

export default TableUsers
