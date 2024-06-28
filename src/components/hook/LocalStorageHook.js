

function useLocalStorage() {
  const getStoredValue = (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : 0;
    } catch (error) {
      console.error(`Error retrieving value for key '${key}' from localStorage:`, error);
      return null;
    }
  };

  const setStoredValue = (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting value for key '${key}' in localStorage:`, error);
    }
  };

  const removeStoredValue = (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing value for key '${key}' from localStorage:`, error);
    }
  };

  return { getStoredValue, setStoredValue, removeStoredValue };
}

export default useLocalStorage;
