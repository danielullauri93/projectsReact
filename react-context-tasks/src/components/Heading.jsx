import React from 'react';
import { Link } from 'react-router';
import { IoIosAdd } from 'react-icons/io';

export default function Heading() {
  return (
    <div>
      <div className="flex item-center mb-10">
        <Link to="/">
          <h5 className="text-gray-100 font-bold text-2xl">Task App</h5>
        </Link>

        <div className="flex-grow text-right px-4 py2 m-2">
          <Link to="/add">
            <button className="bg-green-400 hover:bg-green-600 text-white font-normal py-2 px-4 rounded inline-flex items-center">
              <IoIosAdd />
              Add Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
