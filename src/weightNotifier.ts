const LINE_TOKEN = PropertiesService.getScriptProperties().getProperty('LINE_TOKEN');
const LINE_GROUP_ID = PropertiesService.getScriptProperties().getProperty('LINE_GROUP_ID');
const GSS_ID = PropertiesService.getScriptProperties().getProperty('GSS_ID');
const GSS_SHEET_NAME = PropertiesService.getScriptProperties().getProperty('GSS_SHEET_NAME');

const doPost = (e) => {
  const payload = JSON.parse(e.postData.contents);
  const weight = payload.weight;
  const measuredAt = payload.measuredAt;

  if (GSS_ID && GSS_SHEET_NAME) {
    try {
      const sheet = SpreadsheetApp.openById(GSS_ID).getSheetByName(GSS_SHEET_NAME);
      if (sheet) {
        sheet.appendRow([ weight, measuredAt ]);
      }
    } catch (error) {
      console.log('GSS properties are invalid');
    }
  }

  const text = `けんが体重を測定しました。
体重：${weight}kg
測定日時：${measuredAt}`;

  pushMessage(LINE_GROUP_ID, text);
};

const pushMessage = (groupId: string, message: string): void => {
  const postData = {
    to: groupId,
    messages: [
      {
        type: 'text',
        text: message
      }
    ]
  };

  UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + LINE_TOKEN
    },
    payload: JSON.stringify(postData)
  });
};
