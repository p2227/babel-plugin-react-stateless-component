import fs from 'fs';
import path from 'path';
import * as babel from 'babel-core';
import plugin from '..';
import assert from 'assert';

const dirPath = path.resolve(__dirname,'./transcompile');
const dirs = fs.readdirSync(dirPath);

describe('转换工具', () => {
  dirs.forEach(dir=>{
    it(dir,()=>{
      const before = fs.readFileSync(path.resolve(dirPath,dir,'./before.js'),'utf-8');
      const actual = babel.transform(before, {
        presets: ['react','es2015','stage-0'],
        plugins: [plugin],
      }).code;

      const expected = fs.readFileSync(path.resolve(dirPath,dir,'./expect.js'),'utf-8');
      // fs.writeFileSync(path.resolve(dirPath,dir,'./expect-2.js'),actual)
      assert.equal(actual.trim(),expected.trim());
    })
  })
})
