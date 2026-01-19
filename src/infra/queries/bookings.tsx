import { useQuery } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function useBookings() {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/bookings`);
      return response.json();
    },
  });
}

export function useBooking(bookingId: string) {
  return useQuery({
    queryKey: ["booking", bookingId],
    queryFn: async () => {
      const response = await fetch(`${API_BASE_URL}/bookings/${bookingId}`);
      return response.json();
    },
  });
}
