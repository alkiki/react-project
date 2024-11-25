

import React from 'react'

const CollabCard = ({ imageSrc, title }) => {
    return (
      <div>
        <img className="object-cover aspect-video p-2" src={imageSrc} alt={title} />
        <h1 className="text-lg font-extrabold sm:text-lg md:text-xl pl-2 mb-2">{title}</h1>
      </div>
    );
};

export default CollabCard
