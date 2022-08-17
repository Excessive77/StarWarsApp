import React from 'react';

const People = ({ item }) => {
    const isFavorite = false;
    return (
        <div className="card gap-3 text-center mt-2 ">
            <h2>{item.name}</h2>
            <p>Altura: {item.height} cm</p>
            <p>Peso: {item.mass} kg</p>
            <p>Año: {item.birth_year}</p>
            <div className="card-body">
                <button
                    className={`btn ${
                        isFavorite ? 'btn-success' : 'btn-outline-primary'
                    }`}
                >
                    Favorito
                </button>
            </div>
        </div>
    );
};

export default People;
