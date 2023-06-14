export function* workerSaga() {
    yield;
}

export function* watchingSaga() {
    yield;
}

export default function* rootSaga() {
    yield watchingSaga();
}
