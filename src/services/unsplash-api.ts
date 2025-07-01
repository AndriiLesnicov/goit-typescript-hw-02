import axios from "axios";

const ACCESS_KEY = "VudSgUdTrcoA6IrO48VJiN_TdXFvlm1vcYknQilEBDE";
const BASE_URL = "https://api.unsplash.com/search/photos";

export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
  description: string | null;
}

export interface UnsplashResponse {
  results: UnsplashImage[];
  total_pages: number;
}

export const fetchImages = async (
  query: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  const response = await axios.get<UnsplashResponse>(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
