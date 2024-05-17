// import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const ErrorPage = () => {
  return (
    <>
      <Link to="/">
        <button className="bg-[#fff] flex py-2 px-6 items-center gap-2 rounded-md shadow-md">
          <BsArrowLeft /> <span>Back</span>{' '}
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center h-[50vh] gap-5 text-center">
        <h1 className="text-3xl font-bold tracking-[2px] text-center uppercase ">
          😭AWW... don't cry
        </h1>
        <p>It's just a 404 error</p>
        <p>What you are looking for might have been replaced!</p>
      </div>
      ;
    </>
  );
};

export default ErrorPage;
