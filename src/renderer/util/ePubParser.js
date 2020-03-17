import path from 'path'
import fs from 'fs'

export default async function (directoryInfo) {
  // directory로 ePub정보를 불러옴.
  // 아래를 참고.
  // https://www.epubguide.net/3
  const {path: directoryPath, directoryList} = directoryInfo
  // 디렉토리 구조 파악
  const isDirectoryValid = directoryValidation(directoryList)
  if (isDirectoryValid instanceof Error) {
    throw isDirectoryValid
  }
  const containerXml = containerXmlValidation(path.join(directoryPath, 'META-INF'))
  let containerXmlData = {}
  if (containerXml instanceof Error) {
    throw containerXml
  } else {
    // xml 파싱필요.
    // containerXml을 containerXmlData여기에 데이터화.
    console.log('containerXmlData', containerXmlData)
  }
  // 파일들에 대해서 밸리데이션 후
  // 필수정보들 리턴 필요.
}

const containerXmlValidation = function (directoryPath) {
  return fs.readFileSync(directoryPath)
}

const directoryValidation = function (directoryList) {
  if (directoryList.length < 3 || !directoryList.includes('META-INF') || !directoryList.includes('mimetype') || (!directoryList.includes('OEBPS') && !directoryList.includes('OPS'))) {
    throw new Error('전자책 폴더가 아닙니다.')
  } else if (directoryList.includes('OPS')) {
    throw new Error('오디오북은 현재 지원 하지 않습니다.')
  }
}
