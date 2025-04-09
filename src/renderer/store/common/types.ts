// Enum for action types
export enum ActionTypes {
  LOAD_PDF = 'LOAD_PDF',
  SET_PDF_FILE = 'SET_PDF_FILE',
  SET_MERGE_FILES = 'SET_MERGE_FILES',
}

// Interface for the payload of LOAD_PDF action
export interface LoadPdfPayload {
  file: File;
}

// Interface for the payload of SET_PDF_FILE action
export interface SetPdfFilePayload {
  pdfFile: any;
}

// Interface for the payload of SET_MERGE_FILES action
export interface SetMergeFilesPayload {
  files: File[];
}

// Generic Action Interface
export interface Action<T, P> {
  type: T;
  payload: P;
}
