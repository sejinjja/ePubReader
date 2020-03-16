import extract from 'extract-zip'

export default function (file, opt) {
  // const fs = require('fs').promises;
  // 파일이 있는가?
  // fs.exists("/path/to/file",function(exists){
  //   // handle result
  // });
  // 파일인가?
  // (async() => {
  //   const stat = await fs.lstat('test.txt');
  //   console.log(stat.isFile());
  //   console.log(stat.isFile());
  //   console.log(stat.isDitectory());
  //
  // })().catch(console.error)
  // 파일인 경우에는 아래를 시도.
  // 파일이 아니고 폴더인 경우에는 폴더를 제공
  // 파일이 없는 경우에는 에러를 리턴.
  return new Promise((resolve, reject) => {
    extract(file, opt, function (res) {
      if (res instanceof Error) {
        console.error('res', res)
        reject(res)
      } else {
        // 폴더 file을 리턴.
      }
    })
  })
}
