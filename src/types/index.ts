export interface User {
  _id: string;
  id?: string;
  name?: string;
  email?: string;
  image?: string;
  avatar?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  message?: string;
  token?: string;
  user?: User;
  success?: boolean;
}