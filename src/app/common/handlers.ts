import { Action } from '@ngrx/store';

const convertToDataObject = (key: string) => (action: SuccessAction) => {
  const { payload: { data } } = action;
  if (Array.isArray(data) && key) {
    return data.reduce((acc, item) => ({ ...acc, [item[key]]: item }), {});
  }

  return data;
};

interface SuccessAction  extends Action {
  payload: {
    data: any[];
  };
}

export const normalizeData = (key: string) => (action: SuccessAction) => {
  const dataObject = convertToDataObject(key)(action);
  const dataIds = Object.keys(dataObject);
  return {
      entities: dataObject,
      ids: dataIds,
  };
};

