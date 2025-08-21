import { useState } from "react";

export function useAuth() {
  // Fake auth state — in real apps you'd use Context or Redux
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return { isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) };
}
