import { LinksActions, LinksActionType } from 'app/redux/store/actions/links.actions';

export const initialState = {};

export function LinksReducer(state = initialState, action: LinksActions) {

    switch (action.type) {

        case LinksActionType.GET_LINKS: {
            return { ...state };
        }

        case LinksActionType.GET_LINKS_SUCCESS: {
            let msgText = '';
            let bgClass = '';

            if (action.payload.length < 1) {
                msgText = 'No data found';
                bgClass = 'error-message';
            } else {
                msgText = 'Loading data';
                bgClass = '';
            }

            return {
                ...state,
                todoList: action.payload,
                message: msgText,
                infoClass: bgClass
            };
        }

        case LinksActionType.GET_LINKS_FAILED: {
            return { ...state };
        }

        case LinksActionType.ADD_LINKS: {
            return {
                ...state, message: '',
                infoClass: ''
            };
        }

        case LinksActionType.ADD_LINKS_SUCCESS: {
            const data = state['todoList'].push(action.payload);
            return {
                ...state,
                message: 'New todo added',
                infoClass: 'bg-success'
            };
        }

        case LinksActionType.GET_LINKS_FAILED: {
            return { ...state };
        }

        case LinksActionType.DELETE_LINKS: {
            const todos = state;
            todos['todoList'].forEach((todo: any, i: number) => {
                if (todo.id === action.payload) {
                    todos['todoList'].splice(i, 1);
                }
            });

            return {
                ...state,
                message: '',
                infoClass: ''
            };
        }

        case LinksActionType.DELETE_LINKS_SUCCESS: {
            return {
                ...state,
                message: 'Todo deleted',
                infoClass: 'error-message'
            };
        }

        case LinksActionType.DELETE_LINKS_FAILED: {
            return { ...state };
        }

        default: {
            return state;
        }

    }

}
