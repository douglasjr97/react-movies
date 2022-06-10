import { createContext, useContext, useState } from "react";
import { Movie } from "../../interfaces/interface";

export type FilmesContextState = {
  filme: Movie | null;
  setFilme: (filme: Movie | null) => void;
};

export const FilmesContext = createContext({} as FilmesContextState);

export const FilmesContextProvider: React.FC = ({ children }) => {
  const [filme, setFilme] = useState<Movie | null>(null);

  return (
    <FilmesContext.Provider value={{ filme, setFilme }}>
      {children}
    </FilmesContext.Provider>
  );
};

/**
 * Hook para utilizar o contexto de filmes e evitar a chamada dupla
 */
export const useFilmesContext = () => {
  const context = useContext(FilmesContext);

  if (!context) {
    throw new Error(
      "useFilmesContext deve ser utilizado dentro de um FilmesContextProvider"
    );
  }

  return context;
};

// export default function
