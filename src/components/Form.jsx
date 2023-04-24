import React from "react";
import { useAppContext } from "../context/AppProvider";
import { AiOutlineLink, AiOutlineEdit } from "react-icons/ai";

function Form() {
  const { link, currentId, handleChange, handleSubmit } = useAppContext();
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white text-white p-5 min-w-fit max-w-lg mx-auto text-lg sm:text-xl"
    >
      <label className="flex items-center mb-5">
        <div className="bg-gray-300 py-[10px] px-4">
          <AiOutlineLink className="text-black" />
        </div>
        <input
          type="text"
          value={link.url}
          name="url"
          placeholder="https://someurl.com"
          onChange={(e) => handleChange(e)}
          className="w-full py-1.5 px-2 bg-black text-white shadow-md"
        />
      </label>
      <label className="flex items-center mb-5">
        <div className="bg-gray-300 py-[10px] px-4">
          <AiOutlineEdit className="text-black" />
        </div>
        <input
          type="text"
          value={link.name}
          name="name"
          placeholder="Website name"
          onChange={(e) => handleChange(e)}
          className="w-full py-1.5 px-2 bg-black shadow-md"
        />
      </label>
      <textarea
        value={link.description}
        name="description"
        placeholder="Write a description"
        onChange={(e) => handleChange(e)}
        className="w-full py-1 px-2 min-h-[125px] resize-none mb-5 bg-black shadow-md"
      ></textarea>
      <button className="bg-red-600 w-full py-2 px-2 text-white hover:bg-red-500 transition-colors">
        {currentId ? "Edit" : "Create"}
      </button>
    </form>
  );
}

export default Form;
