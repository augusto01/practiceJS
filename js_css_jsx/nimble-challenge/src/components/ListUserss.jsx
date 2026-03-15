import React, { useState, useEffect } from 'react';

export const ListUserss = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // 1. Corregido: user -> users (para que coincida con el map)
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error al cargar los usuarios!", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers(); // 2. Corregido: La ejecución va afuera de la definición
    }, []);




    const deleteUser = (id) => {
        const filteredUsers = users.filter(u => u.id !== id);
        setUsers(filteredUsers);
    };

    if (loading) return <h2 style={{ textAlign: 'center' }}>Cargando...</h2>;

    return (
        <div className='container'>
            <div className='title'>
                <h1>Usuarios traídos desde la API</h1>
            </div>

            {/* Este es el "padre" que debe tener el display: flex */}
            <div className='grid'> 
                {users.map(user => (
                    <div key={user.id} className='card'>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        {/* Agregamos el botón para que tu función deleteUser sirva de algo */}
                        <button 
                            className='btn-delete' 
                            onClick={() => deleteUser(user.id)}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

