import { Message, sendMessage } from "@app/services/api"
import { createSignal, JSXElement, Match, Show, Switch } from "solid-js"
import { HasBackend, Loader } from "../base";

export const ContactForm = () => {
  return (
    <div class="flex flex-col py-10">
      <HasBackend>
        <Form />
      </HasBackend>
    </div>
  )
}

function Form() {

  const [load, setLoad] = createSignal(false);
  const [doneMessage, setDoneMessage] = createSignal<JSXElement>();

  async function onSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget;

    if (form instanceof HTMLFormElement) {
      const { name, subject, text } = form;

      const msg: Message = {
        name: getInputValue(name),
        subject: getInputValue(subject),
        text: getInputValue(text),
      }

      setLoad(true);
      try {
        await sendMessage(msg);
        showSuccess();
      } catch {
        showError();
      }
      setLoad(false);
    }
  }

  function getInputValue(input: unknown) {
    if (input instanceof HTMLInputElement) {
      return input.value;
    }
    return '';
  }

  function showDoneMessage(message: JSXElement) {
    setDoneMessage(message);
    setTimeout(() => {
      setDoneMessage('');
    }, 3000);
  }

  function showSuccess() {
    const message = <p class="text-success font-bold">Спасибо за ваше сообщение!</p>
    showDoneMessage(message);
  }

  function showError() {
    const message = <p class="text-error font-bold">Ошибка! Попробуйте, пожалуйста, позже</p>
    showDoneMessage(message);
  }

  return (
    <Switch>
      <Match when={!doneMessage()}>
        <form name="form" class="flex flex-col w-96 mx-auto" onSubmit={onSubmit}>
          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Ваше имя</span>
            </label>
            <input
              name="name"
              type="text"
              class="input input-bordered"
              placeholder="Николай"
              required
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Тема</span>
            </label>
            <input
              name="subject"
              type="text"
              class="input input-bordered"
              placeholder="Баг"
              required
            />
          </div>

          <div class="form-control w-full">
            <label class="label">
              <span class="label-text">Сообщение</span>
            </label>
            <input
              name="text"
              type="text"
              class="input input-bordered"
              placeholder="Сообщение"
              required
            />
          </div>

          <div class="mt-4 w-full">
            <button type="submit" class="btn w-full gap-2">
              <Show when={!load()} fallback={
                <Loader />
              }>
                <span>Отправить</span>
              </Show>
            </button>
          </div>
        </form>
      </Match>
      <Match when={!!doneMessage()}>
        <div>{doneMessage()}</div>
      </Match>
    </Switch>
  )
}