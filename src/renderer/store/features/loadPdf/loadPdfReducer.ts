import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadPdfState } from '../../common/interfaces';

const initialState: LoadPdfState = {
  pdfFile: null, // Ensure this is initialized
};

const loadPdfSlice = createSlice({
  name: 'loadPdf',
  initialState,
  reducers: {
    setPdfFile(state, action: PayloadAction<any>) {
      state.pdfFile = action.payload;
    },
  },
});

export const { setPdfFile } = loadPdfSlice.actions;
export default loadPdfSlice.reducer;
