import React from 'react';
import SoloBox from './SoloBox';

function Boxes() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full md:w-4/5">
        <SoloBox heading="10K+" content="Founders Joined Wishlist" />
        <SoloBox heading="1k+" content="Joined Community" />
        <SoloBox heading="4k+" content="Hrs of founder Barnstorming" />
        <SoloBox heading="1k+" content="Hr of Mentor Discussion" />
        <SoloBox heading="400+" content="Hrs of Mentor Brainstorming" />
        <SoloBox heading="10" content="Startup Raised Funds" />
        <SoloBox heading="50+" content="Successful Founders" />
        <SoloBox heading="20+" content="Micro VC Angel Network" />
        <SoloBox heading="100+" content="Active Angel Investor" />
        <SoloBox heading="18+" content="Ecosystem Partners" />
      </div>
    </div>
  );
}

export default Boxes;
