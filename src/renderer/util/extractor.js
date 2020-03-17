import extract from 'extract-zip'
import fs from 'fs'

export default function (file, opt) {
  try {
    fs.accessSync(file, fs.constants.R_OK | fs.constants.W_OK)
  } catch (err) {
    throw new Error('파일이 존재 하지 않습니다.')
  }

  const stat = fs.statSync(file)
  if (stat.isFile()) {
    const {dir} = opt
    return new Promise((resolve) => {
      extract(file, opt, function (res) {
        if (res instanceof Error) {
          console.error('res', res)
          throw new Error('적절하지 못 한 파일 입니다.')
        } else {
          resolve(directoryInfoFactory(dir))
        }
      })
    })
  } else if (stat.isDirectory()) {
    return Promise.resolve(directoryInfoFactory(file))
  }
}

const directoryInfoFactory = function (dir) {
  return {
    path: fs.realpathSync(dir),
    directoryList: fs.readdirSync(dir)
  }
}
