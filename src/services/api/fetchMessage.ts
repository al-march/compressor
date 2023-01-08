export type Message = {
  name: string;
  text: string;
  subject: string;
}

export const sendMessage = (message: Message) => {
  return fetch(`${window.backendUrl}/api/v1/send`, {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json'
    },
  })
}