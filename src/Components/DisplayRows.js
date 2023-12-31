import React from 'react'

import { FaUserEdit, FaTrash } from 'react-icons/fa'

const DisplayRows = ({ user, users, setUsers, setEditUserId, setEditUserForm }) => {

    //  Check if the user is checked and set the users to the state using the setUsers() method.
    const handleChecked = e => {
        const { id, value, checked } = e.target;
        let newUsers = users.map(user => user.id === id && user.name === value ? { ...user, isChecked: checked } : user);
        setUsers(newUsers);
    };

    //  Edit the user data and set the user data to the state using the setEditUserForm() method.
    const handleUserEdit = (e, user) => {
        e.preventDefault();
        setEditUserId(user.id);
        const formValues = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        };
        setEditUserForm(formValues);
    };
    
    //  Delete the user from the users array and set the users to the state using the setUsers() method.
    const handleUserDelete = userId => {
        const newUsers = [ ...users ];
        const index = users.findIndex(user => user.id === userId);
        newUsers.splice(index, 1);
        setUsers(newUsers);
    };

    return (
        <tr data-testid="display-rows" id={user.id} className={`data-row bg-white dark:bg-dark whitespace-nowrap hover:cursor-default hover:bg-blue-light dark:hover:bg-blue-dark hover:text-white ${user?.isChecked ? 'bg-gray-100 dark:bg-gray-800' : null}`}>
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <input 
                    type="checkbox" 
                    className="form-checkbox h-4 w-4 outline-none focus:outline-none" 
                    id={user.id}
                    onChange={handleChecked}
                    checked={user?.isChecked || false}
                    value={user.name}
                />
            </td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{user.name}</td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{user.email}</td>
            <td className="px-6 py-2 whitespace-nowrap text-left">{user.role}</td>
            <td className="px-6 py-2 whitespace-nowrap text-center">
                <button 
                    type="button" 
                    title="Edit" 
                    className="btn p-2 mr-2 text-blue-light rounded dark:text-blue-dark" 
                    onClick={(e) => handleUserEdit(e, user)} 
                >
                    <FaUserEdit />
                </button>
                <button 
                    type="button" 
                    title="Delete" 
                    className="btn p-2 ml-2 text-red-500 rounded" 
                    onClick={() => handleUserDelete(user.id)} 
                >
                    <FaTrash />
                </button>
            </td>
        </tr>
    )
}

export default DisplayRows
