export function combineActions(...actionsTypes: string[]): string {
  return actionsTypes.join('||');
}
