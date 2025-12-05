// Frontend-only mock auth using localStorage so the app
// works without any backend server.

const USERS_KEY = "mockUsers";

const loadUsers = () => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
};

const saveUsers = (users) => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const userRegister = async (name, email, password) => {
  const users = loadUsers();
  const existing = users.find((u) => u.email === email);
  if (existing) {
    throw new Error("User already exists");
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // For demo only – do NOT store plain passwords in real apps
  };

  const updated = [...users, newUser];
  saveUsers(updated);

  // Return a fake token like a real backend would
  return {
    token: `mock-token-${newUser.id}`,
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  };
};

export const userLogin = async (email, password) => {
  const users = loadUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    throw new Error("Invalid email or password");
  }

  return {
    token: `mock-token-${user.id}`,
    user: { id: user.id, name: user.name, email: user.email },
  };
};
