import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Players = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = () => {
        axios.get('http://localhost/api/player-contract/send')
            .then(res => {
                console.log(res.data);
                setPlayers(res.data);
            });
    };

    return (
        <>
        {/* <h3 className='text-secondary'>Our Available Players</h3> */}
            <div className="my-20 w-5/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    players.map(player => {
                        return (
                            <div key={player.id}>
                                <div className="card bg-slate-700 shadow-xl">
                                    <figure><img className='h-60 w-full' src={player.imgURL} alt="..." /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {player.f_name + ' ' + player.l_name}
                                            <div className="badge badge-secondary p-3">Age: {player.age}</div>
                                        </h2>
                                        <p>Bio: {player.bio ? player.bio : 'I am a professional footballer'}</p>
                                        <div className="card-actions justify-end">
                                            <div className="badge badge-outline">{player.position}</div>
                                            <div className="badge badge-outline">{player.country}</div>
                                        </div>
                                        <Link to={`${player.id}`} className="btn btn-secondary btn-outline mt-5">View Profile</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Players;