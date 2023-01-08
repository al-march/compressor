export type Message = {
  name: string;
  text: string;
  subject: string;
}

export const sendHelpMessage = (message: Message) => {
  return fetch(`${window.backendUrl}/api/v1/message`, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}