import React from "react";
import { useAppContext } from "../context/AppProvider";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

function Item({ link }) {
  const { deleteLink, handleUpdate } = useAppContext();
  return (
    <div className="bg-white p-5 text-black flex md:flex-row flex-col md:justify-between rounded">
      <div>
        <h3 className="mb-1 text-xl sm:text-2xl">{link.name}</h3>
        <p className="mb-5 text-lg sm:text-xl">{link.description}</p>
        <a
          href={link.url}
          target="_blank"
          className="text-lg sm:text-xl text-red-600 hover:text-red-500 transition-colors md:mb-0 mb-5 inline-block"
        >
          Go to website
        </a>
      </div>
      <div className="flex text-lg sm:text-xl">
        <AiOutlineEdit
          onClick={() => handleUpdate(link.id)}
          className="text-green-600 hover:text-green-500 transition-colors cursor-pointer"
        >
          Edit
        </AiOutlineEdit>
        <AiFillDelete
          onClick={() => deleteLink(link.id)}
          className="md:ml-1 text-red-600 hover:text-red-500 transition-colors cursor-pointer"
        >
          Delete
        </AiFillDelete>
      </div>
    </div>
  );
}

export default Item;
