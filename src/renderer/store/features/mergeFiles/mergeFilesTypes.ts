import { Action } from '@reduxjs/toolkit';

export interface MergeFilesAction extends Action<string> {
  payload: File[];
}
