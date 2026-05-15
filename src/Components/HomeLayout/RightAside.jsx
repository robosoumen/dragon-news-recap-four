import React from 'react';
import SocialSection from './SocialSection';
import FaceBook from './FaceBook';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <SocialSection></SocialSection>
            <FaceBook></FaceBook>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;