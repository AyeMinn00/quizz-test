import { foundDot, isNumeric } from "./util"

test('return true for a number', () => {
    const result = isNumeric('3')
    expect(result).toBeTruthy()
})

test('return false for a not number', () => {
    const result = isNumeric('three')
    expect(result).toBeFalsy()
})

test('return false for empty string', () => {
    const result = isNumeric('')
    expect(result).toBeFalsy()
})

test('return false for white space', () => {
    const result = isNumeric('  ')
    expect(result).toBeFalsy()
})

test('return false for float', () => {
    const result = isNumeric('4.4')
    expect(result).toBeFalsy()
})

test('return true for a string including a dot', () => {
    const result = foundDot(".com")
    expect(result).toBeTruthy()
})

test('return false for a string excluding a dot', () => {
    const result = foundDot("com")
    expect(result).toBeFalsy()
})

test('return false for a string start with zero and more than a char', () => {
    const result = isNumeric("0a")
    expect(result).toBeFalsy()
})

test('return true for a string zero', () => {
    const result = isNumeric("0")
    expect(result).toBeTruthy()
})