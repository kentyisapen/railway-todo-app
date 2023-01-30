import { cdate } from "cdate"

/**
 * APIに対するリクエストで使用されるdatetimeの形式にフォーマットする
 * 
 * @param {string} dateString 
 * 
 * @returns {string} YYYY-MM-DDTHH:MM:SSZ 形式の文字列
 * 
 */
export const formatDateStringForRequest = (dateString) => {
  return cdate(dateString).text("%Y-%m-%dT%H:%M:%SZ");
}

/**
 * input type=datetime-localで使用する形式にフォーマットする
 * 
 * @param {string} dateString 
 * 
 * @returns {string} YYYY-MM-DDTHH:MM:SS 形式の文字列
 */
export const formatDateStringForDatetimeLocal = (dateString) => {
  return cdate(dateString).text("%Y-%m-%dT%H:%M:%S");
}

/**
 * 何らかのdate形式のstringを日本語表記に変換する
 * 
 * @param {string} dateString 
 * 
 * @returns {string} YYYY年MM月DD日 HH時MM分SS秒 形式の文字列
 */
export const formatDateStringForJapanese = (dateString) => {
  cdate(dateString).text("%Y年%m月%d日 %H時%M分%S秒")
}


