
export const CHANGENAME = 'CHANGENAME';
export function changeName() {
    return dispatch => {
        dispatch({
            type: CHANGENAME,
            datas: { name: 'world' }
        })
    }
}