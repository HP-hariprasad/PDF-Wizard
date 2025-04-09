import { MergeFilesState } from '../common/interfaces';
import { ActionTypes, SetMergeFilesPayload } from '../common/types';

const initialState: MergeFilesState = {
  mergeFiles: [],
};

const mergeFilesReducer = (state = initialState, action: { type: ActionTypes; payload?: SetMergeFilesPayload }): MergeFilesState => {
  switch (action.type) {
    case ActionTypes.SET_MERGE_FILES:
      return {
        ...state,
        mergeFiles: action.payload?.files || [],
      };

    default:
      return state;
  }
};

export default mergeFilesReducer;
