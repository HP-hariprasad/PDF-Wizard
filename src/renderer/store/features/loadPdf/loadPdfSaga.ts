import { takeEvery, put, call } from 'redux-saga/effects';
import { setPdfFile } from '../../common/actions';
import { ActionTypes, LoadPdfPayload } from '../../common/types';

function* loadPdfSaga(action: { type: ActionTypes.LOAD_PDF; payload: LoadPdfPayload }) {
  try {
    if (!action.payload || !action.payload.file) {
      throw new Error('Invalid payload: file is undefined');
    }
    const file = action.payload.file;
    const arrayBuffer = yield call(() => file.arrayBuffer());
    const { PDFDocument } = yield import('pdf-lib');
    const pdfDoc = yield call(PDFDocument.load, arrayBuffer);
    yield put(setPdfFile({ pdfFile: pdfDoc }));
  } catch (error) {
    console.error('Error in loadPdfSaga:', error);
  }
}

export default function* watchLoadPdfSaga() {
  yield takeEvery(ActionTypes.LOAD_PDF, loadPdfSaga);
}
