export const getActionName = (prefix?: string) => (name: string) => `[${prefix}] ${name}`;

export const createRequestActionTypes = (prefix?: string) => (name: string) => ({
  START: `${getActionName(prefix)(name)}__START`,
  SUCCESS: `${getActionName(prefix)(name)}__SUCCESS`,
  FAILED: `${getActionName(prefix)(name)}__FAILED`,
});
