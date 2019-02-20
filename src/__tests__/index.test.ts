import deepSortObject from 'deep-sort-object'
import { HTTPMethod } from '../index'

test('HTTPMethod', () => {
  expect(HTTPMethod).toMatchSnapshot()
  expect(JSON.stringify(deepSortObject(HTTPMethod), undefined, 2)).toEqual(
    JSON.stringify(HTTPMethod, undefined, 2)
  )
})
