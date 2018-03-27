import storage from 'good-storage';

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray(arr, val, compare, maxLen) { 
    const index = arr.findIndex(compare)
    if(index === 0) {
        return
    }
    if(index > 0) {
        arr.splice(index, 1)
    }
    arr.unshift(val)
    if(maxLen && arr.length > maxLen) {
        arr.pop()
    }
}

function deleteArray(arr, compare) {
    const index = arr.findIndex(compare)
    if(index > -1) {
        arr.splice(index, 1)
    }
}

export function saveSearch(query) { 
    let seachers = storage.get(SEARCH_KEY, [])
    insertArray(seachers, query, (item) => {
        return item === query
    }, SEARCH_MAX_LENGTH)
    storage.set(SEARCH_KEY, seachers)
    return seachers
}

export function loadSeach() {
    return storage.get(SEARCH_KEY, [])
}

export function deleteSearch(query) {
    let seachers = storage.get(SEARCH_KEY, [])
    deleteArray(seachers, (item) => {
        return item === query
    })
    storage.set(SEARCH_KEY, seachers)
    return seachers
}

export function clearSearch() {
    storage.remove(SEARCH_KEY)
    return []
}