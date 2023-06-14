const replaceAndGetMatchedText = (text: string): string => {
  text.match(/<highlight>(.*?)<\/highlight>/g)?.map((val) => {
    return val.replace(/<\/?highlight>/g, '')
  })
  text = text.replace(/<\/?highlight>/g, '')
  return text
}

export default replaceAndGetMatchedText
