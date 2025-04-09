import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MergeFilesState } from '../../common/interfaces';

const initialState: MergeFilesState = {
  mergeFiles: [],
};

const mergeFilesSlice = createSlice({
  name: 'mergeFiles',
  initialState,
  reducers: {
    setMergeFiles(state, action: PayloadAction<File[]>) {
      state.mergeFiles = action.payload;
    },
  },
});

export const { setMergeFiles } = mergeFilesSlice.actions;
export default mergeFilesSlice.reducer;
