import React from 'react';

const Paragraph = ({ shortTitle, shortDescription }) => {
  return (
    <div className="mx-auto container content">
      <div className="flex flex-col gap-4 items-center justify-center mt-8 sm:mt-10 md:mt-12 px-4">
        <div className=" text-red-500 text-xl sm:text-2xl text-start md:text-center">{shortTitle}</div>
        <div className=" text-base sm:text-lg text-start md:text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {shortDescription}
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
