import '../index.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function List() {

    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:5000/ongoing-anime');
            setList(data.list);
        }
        fetchData();
    }, [])

    return (
        <div>
            <div className="grid p-3">
                <div class="mb-3 pt-0">
                    <input type="text" placeholder="Search ...." class="px-2 py-1 text-blue-600 relative bg-blue rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3">
                {
                    list.map((data,id)=>{
                        return <div key={id}>
                            <GenerateList props={data} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}


function GenerateList(props) {
    let { anime_name, anime_link, anime_image } = props.props;
    return (
        <div className="max-w-md bg-gray-100 bg-opacity-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-2">
            <div className="p-8">
                <a href={`episode/${generateSlug(anime_link)}`} className="uppercase tracking-wide text-sm text-indigo-500 font-semibold block mt-1 text-lg leading-tight font-medium text-black hover:underline">{anime_name}</a>
                <p className="mt-2 text-gray-500"></p>
            </div>
        </div>  
    )
}

function generateSlug(link) {
    let replace = link.replace('https://moenime.web.id//', '');

    return replace;
}


export default List;