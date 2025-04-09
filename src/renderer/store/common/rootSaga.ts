import { all } from 'redux-saga/effects';
import watchLoadPdfSaga from '../features/loadPdf/loadPdfSaga';
import watchMergeFilesSaga from '../features/mergeFiles/mergeFilesSaga';

export default function* rootSaga() {
  try {
    yield all([watchLoadPdfSaga(), watchMergeFilesSaga()]);
  } catch (error) {
    console.error('Error in rootSaga:', error);
  }
}
