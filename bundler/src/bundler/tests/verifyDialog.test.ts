import { test, expect } from 'bun:test';
import {verifyJSON} from "../verifyJSON.ts";

test('should return true if JSON complies', () => {
    expect(verifyJSON({})).toBeTruthy()
})