// src/services/authService.ts
const API_URL = import.meta.env.VITE_API_URL;

export const authService = {
  async login(email: string, password: string) {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur de connexion");
    }

    const data = await response.json();
    if (data.userId) {
      // Stockage des informations utilisateur
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.userId,
          email: email,
        }),
      );
    }
    return data;
  },

  async register(email: string, password: string) {
    const response = await fetch(`${API_URL}/api/clients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Erreur d'inscription");
    }

    return response.json();
  },

  logout() {
    localStorage.removeItem("user");
  },

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  },

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },
};
