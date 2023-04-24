import { React, createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const AppContext = createContext();

const linkInitialState = {
  url: "",
  name: "",
  description: "",
};

export function AppProvider({ children }) {
  const [link, setLink] = useState(linkInitialState);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentId, setCurrentId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLink({ ...link, [name]: value });
  };

  const addLink = async () => {
    try {
      await addDoc(collection(db, "links"), link);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    const currentLink = links.find((link) => link.id === id);
    setLink(currentLink);
    setCurrentId(id);
  };

  const updateLink = async () => {
    try {
      const docRef = doc(db, "links", currentId);
      await updateDoc(docRef, link);
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteLink = async (id) => {
    try {
      if (confirm("Are you sure you want to remove this link?")) {
        const docRef = doc(db, "links", id);
        await deleteDoc(docRef);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      updateLink();
    } else {
      addLink();
    }
    setLink(linkInitialState);
  };

  const getLinks = () => {
    try {
      const docRef = collection(db, "links");
      onSnapshot(docRef, (querySnapshot) => {
        let newLinks = [];
        querySnapshot.forEach((doc) => {
          const newDoc = { ...doc.data(), id: doc.id };
          newLinks = [...newLinks, newDoc];
        });
        setLinks(newLinks);
        setLoading(false);
      });
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        link,
        links,
        loading,
        currentId,
        handleChange,
        handleSubmit,
        handleUpdate,
        deleteLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  return useContext(AppContext);
};
