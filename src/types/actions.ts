import {FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_RECEIVED,
    FETCH_NEIGHBORHOOD_ITEMS,
    FETCH_LOCATION_ITEMS,
    TOGGLE_BANNER_PANEL,
    FETCH_ERROR_MESSAGE,
    TOGGLE_CONTENT_PANEL,
    CLEAR_DATA_SERVER,
    USER_SEARCH_VALUE,
} from '../constants/Actions';

export interface ActionTypeWithStringPayload{
    type: typeof FETCH_SEARCH_REQUEST | typeof TOGGLE_BANNER_PANEL | typeof TOGGLE_CONTENT_PANEL | typeof USER_SEARCH_VALUE
    payload: string;
}

export interface ActionTypeWithSearchModal{
    type: typeof FETCH_SEARCH_RECEIVED
    payload: any;
}

export interface ActionTypeWithArray{
    type: typeof FETCH_ERROR_MESSAGE
    payload: Array<any>
}

export interface ActionTypeWithOutPayload{
    type: typeof CLEAR_DATA_SERVER | typeof FETCH_NEIGHBORHOOD_ITEMS | typeof FETCH_LOCATION_ITEMS
}

export type AllActionTypes = ActionTypeWithStringPayload | ActionTypeWithOutPayload | ActionTypeWithSearchModal | ActionTypeWithArray;