import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  created_at: string;
  email: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", { params: { page } });

  const totalCount = Number(headers["x-total-count"]);

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

  return { users, totalCount };
}

export function useUsers(page: number, options?: UseQueryOptions) {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 60 * 1,
    ...options,
  });
}
