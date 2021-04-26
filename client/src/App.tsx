import React, { useState, createContext } from "react";
import { NavigationProvider } from "./navigation";
import { Nav } from "./components";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({ cache: new InMemoryCache(), uri: "/" });

export const AppContext = createContext<{
  isOffline: boolean;
  setIsOffline: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isOffline: false,
  setIsOffline: () => console.warn("Missing provider")
});

const App: React.FC = () => {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOffline,
        setIsOffline
      }}
    >
      <ApolloProvider client={client}>
        <NavigationProvider>
          <Nav />
        </NavigationProvider>
      </ApolloProvider>
    </AppContext.Provider>
  );
};

export default App;
