import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
interface IInitialState {
  photos: IPhotos[];
  isLoading: boolean;
  error: string;
}
const initialState: IInitialState = {
  photos: [],
  isLoading: true,
  error: "",
};
export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async () => {
    try {
      const url = "http://localhost:3000/api";
      const res = await fetch(url, {
        method: "GET",
        cache: "no-store",
      });
      const photos = await res.json();
      return photos;
    } catch (error) {
      console.error(error);
    }
  }
)

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchPhotos.fulfilled,
        (state, action: PayloadAction<IPhotos[]>) => {
          state.isLoading = false;
          state.photos = action.payload;
        }
      )
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  }
})

export default photosSlice.reducer;