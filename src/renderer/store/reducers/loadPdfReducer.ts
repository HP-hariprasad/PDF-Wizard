import { LoadPdfState } from '../common/interfaces';
import { ActionTypes, SetPdfFilePayload } from '../common/types';

const initialState: LoadPdfState = {
  pdfFile: null,
};

const loadPdfReducer = (state = initialState, action: { type: ActionTypes; payload?: SetPdfFilePayload }): LoadPdfState => {
  switch (action.type) {
    case ActionTypes.SET_PDF_FILE:
      return {
        ...state,
        pdfFile: action.payload?.pdfFile || null,
      };

    default:
      return state;
  }
};

export default loadPdfReducer;
