import { ActionTypes, SetPdfFilePayload, SetMergeFilesPayload } from './types';

export const loadPdf = (): { type: ActionTypes.LOAD_PDF } => ({
  type: ActionTypes.LOAD_PDF,
});

export const setPdfFile = (payload: SetPdfFilePayload): { type: ActionTypes.SET_PDF_FILE; payload: SetPdfFilePayload } => ({
  type: ActionTypes.SET_PDF_FILE,
  payload,
});

export const setMergeFiles = (payload: SetMergeFilesPayload): { type: ActionTypes.SET_MERGE_FILES; payload: SetMergeFilesPayload } => ({
  type: ActionTypes.SET_MERGE_FILES,
  payload,
});
