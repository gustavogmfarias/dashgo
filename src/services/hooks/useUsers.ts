import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  created_at: string;
  email: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
}

export function useUsers() {
  return useQuery(
    "users",
    getUsers,
    { staleTime: 1000 * 5 } // 5 seconds
  );
}
