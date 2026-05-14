import React from 'react';
import { use } from 'react';

const categoryPromises = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromises);
    console.log(categories)
    return (
        <div>
            <p className='font-bold'>All Categories {categories.length}</p>
        </div>
    );
};

export default Categories;