import { describe, expect, it } from '@jest/globals'
import { plus } from '../lib/index.cjs'
// import $ from 'jquery'
// import { createDiv } from './utils'
import '@testing-library/jest-dom'
// import { waitFor } from '@testing-library/dom'

describe('Test methods', () => {
	it('plus', () => {
		expect(plus(1,2)).toEqual(3)
	})
})
