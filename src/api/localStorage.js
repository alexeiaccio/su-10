/* global localStorage */
export const loadState = x => {
  try {
    const serializedState = localStorage.getItem('values')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)[x]
  } catch (err) {
    return undefined
  }
}

export const getState = () => {
  try {
    const serializedState = localStorage.getItem('values')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (location, values) => {
  try {
    const serializedState = JSON.stringify({
      ...getState(),
      [location]: values,
    })
    localStorage.setItem('values', serializedState)
  } catch (err) {
    // Ignore write errors.
  }
}
