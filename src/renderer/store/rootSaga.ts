import { all } from 'redux-saga/effects';
import pdfSaga from './pdfSaga';

export default function* rootSaga() {
  try {
    yield all([pdfSaga()]); // Combine all sagas
  } catch (error) {
    console.error('Error in rootSaga:', error);
  }
}
