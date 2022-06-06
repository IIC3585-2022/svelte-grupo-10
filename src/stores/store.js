import { persistStore } from "./persistStore";

const defaultData = []

export const store = persistStore('data', defaultData)

