import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromises = fetch('/categories.json').then(res => res.json())

const Categories = () => {
    const categories = use(categoryPromises);
    console.log(categories)
    return (
        <div>
            <p className='font-bold'>All Categories {categories.length}</p>
            <div className='grid grid-cols-1'>
                {
                    categories.map(category => <NavLink className='btn hover:btn-primary' to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;