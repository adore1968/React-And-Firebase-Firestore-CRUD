import React from "react";
import { useAppContext } from "../context/AppProvider";
import Item from "../components/Item";
import Loading from "../components/Loading";

function ItemList() {
  const { links, loading } = useAppContext();

  if (loading) return <Loading />;

  if (links.length < 1) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-xl sm:text-2xl text-white">
          The list of links is empty
        </h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
      {links.map((link) => {
        return <Item key={link.id} link={link} />;
      })}
    </div>
  );
}

export default ItemList;
