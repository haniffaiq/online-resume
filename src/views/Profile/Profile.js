import React from 'react';
import TypeAnimation from 'react-type-animation';
const Profile = () => {
    return (
        <div className='container'>
            <div className='parent'>
                <div className='profile'>
                    <div className='profile-name'>
                        Hello, I'm <span className='text-highlight'>Hanif Faiq</span>
                    </div>
                    <div className='profile-role'>

                        {" "}
                        <span className='text-primary'>

                            <TypeAnimation
                                cursor={true}
                                sequence={[
                                    'Fullstack Javascript.',
                                    3000,
                                    'Backend Developer.',
                                    3000,
                                    'IoT Enthusiast.',
                                    3000,
                                    'Data Engineer.',
                                    3000,

                                ]}
                                wrapper="h3"
                                repeat={Infinity}
                            />
                        </span>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile; 