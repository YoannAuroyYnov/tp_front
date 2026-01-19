import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useSpaces() {
  return useQuery({
    queryKey: ["spaces"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/spaces`);
      return response.json();
    },
  });
}

export function useSpace(spaceId: string) {
  return useQuery({
    queryKey: ["spaces", spaceId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/spaces/${spaceId}`);
      return response.json();
    },
  });
}

export function useSpaceAvailability(spaceId: string, date: string) {
  return useQuery({
    queryKey: ["spaces", spaceId, "spaceAvailability"],
    queryFn: async () => {
      const response = await fetch(
        `${API_BASE_URL}/spaces/${spaceId}/availability?date=${date}`,
      );
      return response.json();
    },
  });
}
