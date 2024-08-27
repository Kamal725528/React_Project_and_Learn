import { createContext, useState, useEffect } from "react";
import { baseUrl } from "../data";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  async function fetchBlogPosts(page = 1, tag = null, category) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    if (tag) {
      url += `&tag=${tag}`;
    }
    if (category) {
      url += `&category=${category}`;
    }

    try {
      const response = await axios.get(url);
      const data = response.data;
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (e) {
      console.log('Error in fetching data from API' + e);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }

    setLoading(false);
  }

  function handlePageChange(page) {
    navigate({ search: `?page=${page}` });
    setPage(page);
  }

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    darkMode,
    toggleDarkMode,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
