"use client";

import { createContext, useContext, useState } from "react";
import { CollectionItem, SetState, iCollectionUser } from "../utils/types/globals.type";

export interface Props {
  children?: React.ReactNode;
}

export interface IGlobalContext {
  collection: CollectionItem | null;
  setCollection: SetState<CollectionItem | null>;
  user: iCollectionUser | null;
  setUser: SetState<iCollectionUser | null>;
  userId: number | null;
  setUserId: SetState<number | null>;
}

// This is the context
export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

// contains all global context value use this hook to get context value in components under GlobalContextProvider
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// Global Context Provider, wrap the context area with this
export const GlobalContextProvider = ({ children }: Props) => {
  const [collection, setCollection] = useState<CollectionItem | null>(null);
  const [user, setUser] = useState<iCollectionUser | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  const value = {
    collection,
    setCollection,
    user,
    setUser,
    userId,
    setUserId,
  };

  return <GlobalContext.Provider value={value as IGlobalContext}>{children} </GlobalContext.Provider>;
};
