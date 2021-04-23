import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EpisodeList({ anime }) {

    const [listEpisode, setListEpisode] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios({
                method: 'post',
                url: 'http://localhost:5000/ongoing-anime/get-episode/',
                data: {
                    link: 'https://moenime.web.id//' + anime,
                }
            });

            setListEpisode(data.episode.dataEpisode);
        }

        fetchData();
    }, [])

    return (
        <div className="container">

            <div className="grid grid-rows-6">
                <h1 className="m-5 text-lg"> {anime} </h1>
                <hr />

                <div className="ml-5 -mt-10">
                    <p> List </p>
                    <br></br>

                    <ul className="list-disc ml-5">
                        {
                            listEpisode.map((value, id) => {
                               return <li key={id}>
                                <a className="text-blue" href={value.data.[0].downloadLink}> {value.title} </a> 
                               </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EpisodeList;
