import { Action } from '@reduxjs/toolkit';

export interface LoadPdfAction extends Action<string> {
  payload: File;
}
