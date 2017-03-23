'use strict';
type ParseObject = Object;

export type Action =
  {type: 'LOADED_ABOUT', list: Array<ParseObject> }
 |{type: 'LOADED_CONFIG', list: Arrary<ParseObject>}
 |{type: 'SWITCH_TAB', tab: 'home' | 'class' | 'huiben' | 'my' }
 ;

 export type Dispatch = (action:Action | ThunkAction | PromiseAction | Array<Action>) => any;
 export type GetState = () => Object;
 export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
 export type PromiseAction = Promise<Action>;
