import { ActionTypes, SetPdfFilePayload, SetMergeFilesPayload } from './types';

export const loadPdf = (file: File): { type: ActionTypes.LOAD_PDF; payload: { file: File } } => ({
  type: ActionTypes.LOAD_PDF,
  payload: { file }, // Pass the file as part of the payload
});

export const setPdfFile = (payload: SetPdfFilePayload): { type: ActionTypes.SET_PDF_FILE; payload: SetPdfFilePayload } => ({
  type: ActionTypes.SET_PDF_FILE,
  payload,
});

export const setMergeFiles = (payload: SetMergeFilesPayload): { type: ActionTypes.SET_MERGE_FILES; payload: SetMergeFilesPayload } => ({
  type: ActionTypes.SET_MERGE_FILES,
  payload,
});
