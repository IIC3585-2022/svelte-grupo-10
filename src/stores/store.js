import { persistStore } from "./persistStore";
import { writable } from 'svelte/store'


const defaultData = []

export const store = persistStore('data', defaultData)

export const menu = writable(0)