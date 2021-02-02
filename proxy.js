/*
const ffi = require('ffi-napi')
const path = require('path')
// console.log(path.resolve('./dll/HookProxy.dll'))
const dll = new ffi.Library('dll/HookProxy.dll', {
  'SetProxy':
    [
        'bool',['bool','string','string','int','string','string','string']
    ],
  'CheckSocks5':
  [
      'bool',['string','int','string','string']
  ]
})
const res = dll.CheckSocks5('47.240.19.18',3306,'','')
console.log(res)

*//*
edge = require('electron-edge-js')
const path = require('path')
//console.log(path.resolve('D:/others/igamep/speeds/NewProxy.dll'))
  invoke = edge.func({
    assemblyFile: path.resolve('NewProxy.dll'),
    typeName: 'NewProxy.StartUp',
    methodName: '_cgoexp_12252fcbf119_Driver_Init'
  })
 invoke(['0.0.0.0',21678,'127.0.0.1','[::1]'], function (err, val) {
          if (err) throw err
          console.log(val)
          
        })
*/
const ffi = require('ffi-napi')
const path = require('path')
// console.log(path.resolve('./dll/HookProxy.dll'))
const dll = new ffi.Library('NewProxy.dll', {
  'd_cgoexp_12252fcbf119_Driver_Init':
    [
        'int',['string','int','string','string']
    ],
  'd_cgoexp_12252fcbf119_Driver_Free':
    [
        'int',[]
    ],
  'CheckSocks5':
  [
      'bool',['string','int','string','string']
  ]
})
const res = dll.d_cgoexp_12252fcbf119_Driver_Init('0.0.0.0',21678,'127.0.0.1','[::1]')
console.log(res)
dll.Driver_Free()
