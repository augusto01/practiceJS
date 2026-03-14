import React, { useState, useEffect } from 'react';

export const ListUsers = () => {
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
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center' }}>Panel de Talento - Nimble Gravity</h1>
            <div style={gridStyle}>
                {users.map(user => (
                    <div key={user.id} style={cardStyle}>
                        <h3>{user.name}</h3>
                        <p>📧 {user.email}</p>
                        <p>🏢 {user.company.name}</p>
                        <button 
                            onClick={() => deleteUser(user.id)}
                            style={buttonStyle}
                        >
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Importante: ¡No te olvides de los estilos!
const containerStyle = { padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'sans-serif' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' };
const cardStyle = { backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' };
const buttonStyle = { backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer' };