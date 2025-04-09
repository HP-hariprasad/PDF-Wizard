import { takeEvery } from 'redux-saga/effects';
import { ActionTypes } from '../../common/types';

function* mergeFilesSaga() {
  console.log('Merge files saga triggered');
}

export default function* watchMergeFilesSaga() {
  yield takeEvery(ActionTypes.SET_MERGE_FILES, mergeFilesSaga);
}
