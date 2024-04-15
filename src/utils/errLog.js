import { formatDate, isElectron } from "@/utils/index";
const fs = require('fs');
const path = require('path');

export const logWrite = (fileContent) => {
  // 生成文件内容
  if (import.meta.env.MODE === 'production' && isElectron()) {
    // 生成文件名，你可以根据需要自定义文件名和路径
    const fileName = `vue: error_${formatDate(Date.now())}.txt`;
    const filePath = path.join(__dirname, '../../', fileName);
    console.log('app.getPath(\'userData\')', filePath);

    // 写入错误信息到文件
    fs.writeFile(filePath, fileContent, (error) => {
      if (error) {
        console.error('无法写入错误报告文件：', error);
      } else {
        console.log('错误报告文件已生成：', filePath);
      }
    });
  }
};
