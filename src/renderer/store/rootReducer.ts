import { combineReducers } from 'redux';
import loadPdfReducer from './reducers/loadPdfReducer';
import mergeFilesReducer from './reducers/mergeFilesReducer';

const rootReducer = combineReducers({
  loadPdf: loadPdfReducer,
  mergeFiles: mergeFilesReducer,
});

export default rootReducer;
