import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const [foundNews, setFoundNews] = useState([]);
    const {id} = useParams();
    const data = useLoaderData();
    useEffect(() => {

        if(id == '0'){
            setFoundNews(data);
        }else if(id == '1'){
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setFoundNews(filterNews)
        }else{
             const filteredNews = data.filter((news) => news.category_id == id);
        setFoundNews(filteredNews);
        }
    }, [id, data])
   
    return (
        <div>
            <p>this is categoryNews -{id}</p>
            <p>Only {foundNews.length} news Found</p>
            <div className='grid grid-cols-1 gap-7 mx-auto justify-center items-center'>
                {
                    foundNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;