import { useMutation } from "@tanstack/react-query";

export function useCreateBooking() {
  return useMutation({
    mutationFn: async (newBooking: {
      name: string;
      start_datetime: string;
      end_datetime: string;
      spaceId: string;
      userId: string;
    }) => {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBooking),
      });
      return response.json();
    },
  });
}

export function useUpdateBooking() {
  // Implementation for updating a booking
}

export function useDeleteBooking() {
  // Implementation for deleting a booking
}
