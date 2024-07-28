import React from 'react';

function SoloBox(props) {
  return (
    <div className='w-full md:w-auto flex justify-center'>
      <div className='box-border h-40 w-full md:w-56 p-4 border-2 border-black rounded-xl bg-slate-50 my-6 overflow-hidden'>
        <h1 className='text-6xl font-bold flex justify-center items-center h-full'>{props.heading}</h1>
        <h6 className='text-xs font-bold flex justify-center'>{props.content}</h6>
      </div>
    </div>
  );
}

export default SoloBox;
