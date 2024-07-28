import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersGear,
  faPeopleGroup,
  faSackDollar,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";
function Offer(props) {
  return (
    <div className="flex justify-center h-64 my-4">
      <div className="w-4/5 my-8 px-20">
        <div className="text-3xl font-bold">{props.title}</div>
        <p className="text-xs text-gray-500 my-1">
          {props.content}
        </p>
        <div className="flex justify-right">
          <div className="text-6xl mt-auto ml-auto py-20 rounded-xl">
            <FontAwesomeIcon icon={props.icon} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Offer;
