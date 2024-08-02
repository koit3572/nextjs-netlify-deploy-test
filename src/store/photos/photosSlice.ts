import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPhotos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// interface PostData {
//   title: string;
//   discription: string;
//   writer: string;
//   createdAt: string;
//   updatedAt: string;
//   tags: string[];
//   content?: string;
//   isFavorite: boolean;
// }
// interface IMainSideBarData {
//   [dirName: string]: string[];
// }
// interface IPostData {
//   postFolderStructure: IMainSideBarData;
//   posts: {
//     [postPath: string]: PostData;
//   };
// }

interface IInitialState {
  photos: IPhotos[];
  isLoading: boolean;
  error: string;
}
const initialState: IInitialState = {
  photos: [], //{} as IPostData,
  isLoading: true,
  error: "",
};
export const fetchPhotos = createAsyncThunk(
  "photos/fetchPhotos",
  async (_, thunkAPI) => {
    // try {
    //   const res = await fetch("/api", {
    //     method: "GET",
    //     cache: "no-store",
    //   });
    //   if (!res) {
    //     throw new Error("error response is empty");
    //   }
    //   const postData = await res.json();
    //   return postData;
    // } catch (error) {
    //   return thunkAPI.rejectWithValue("Error loading fetchPost");
    // }

    try {
      const url = "api";
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
        (state, action) => {
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