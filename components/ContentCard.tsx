
import React from 'react';
import { ContentItem } from '../types';

const ContentCard: React.FC<ContentItem> = ({ title, description, imageUrl, affiliateLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden flex flex-col transform hover:-translate-y-2">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover object-center"
        loading="lazy"
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed mb-6 flex-grow">{description}</p>
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block self-start bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 text-sm"
        >
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};

export default ContentCard;
