import React from 'react';

const PostTypeContent = ({ title, text1, text2 }) => {
  return (
    <div className="w-full flex flex-col gap-4 mt-8 lg:mt-12">
      <div className=" text-sm">
        <span className="text-red-600">Hem </span>» {title}
      </div>
      <h1 className=" text-3xl lg:text-4xl">{title}</h1>
      <p className=" text-base lg:text-lg text-slate-600">{text1}</p>
      <p className=" text-slate-600 text-base lg:text-lg">{text2} </p>
    </div>
  );
};

export default PostTypeContent;
