import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialSection = () => {
    return (
        <div className='flex flex-col gap-4'>
            <button className='btn btn-outline'><FcGoogle size={24}/> Log In With Google</button>
            <button className='btn btn-outline'><FaGithub size={24}></FaGithub> Log In With GitHub</button>
        </div>
    );
};

export default SocialSection;