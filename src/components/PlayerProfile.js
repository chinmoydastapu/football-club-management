import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PlayerProfile = () => {
    const [player, setPlayer] = useState({});

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = () => {
        axios.get('http://localhost/api/player-contract/send')
            .then(res => {
                const pathname = window.location.pathname;
                const pathnameSplitted = pathname.split('/');
                const pathId = parseInt(pathnameSplitted[pathnameSplitted.length - 1]);
                setPlayer(res.data.find(player => player.id === pathId));
            });
    };
    return (
        <div>
            <section className="text-white pt-8 bg-blueGray-50">
                <div className="w-3/4 px-4 mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-xl rounded-lg mt-20">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative">
                                        <img src={player.imgURL} alt='...' className="w-72 h-72 rounded-full -mt-24" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-6">
                                <h1 className="text-3xl font-semibold leading-normal mb-2">
                                    {player.f_name + ' ' + player.l_name}
                                    <p className="text-xs">{player.email}</p>
                                </h1>
                                <div className="text-lg leading-normal mt-0 mb-2 font-bold uppercase">
                                    {player.c_address}
                                </div>
                                <div className="mb-2 mt-10">
                                    <span className="font-semibold">Position:</span> {player.position}
                                </div>
                                <div className="mb-2">
                                    <span className="font-semibold">Strong Foot:</span> {player.strong_foot}
                                </div>

                                <div class="w-full px-4 text-center mt-10">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block tracking-wide text-blueGray-600">
                                                {player.age} years
                                            </span>
                                            <span class="text-sm text-blueGray-400">Age</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block tracking-wide text-blueGray-600">
                                                {player.height} cm
                                            </span>
                                            <span class="text-sm text-blueGray-400">Height</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block tracking-wide text-blueGray-600">
                                                {player.weight} lb
                                            </span>
                                            <span class="text-sm text-blueGray-400">Weight</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed">
                                            An artist of considerable range, Jenna the name taken
                                            by Melbourne-raised, Brooklyn-based Nick Murphy
                                            writes, performs and records all of his own music,
                                            giving it a warm, intimate feel with a solid groove
                                            structure. An artist of considerable range.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlayerProfile;