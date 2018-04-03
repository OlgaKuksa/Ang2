import { Message } from "../classes/message";

export const mockMessages: Message[] =
  //[];
  [
    {
      id: "1",
      headers: [
        {
          name: "Anna Lewis",
          value: "a.lewis@ng.com"
        }
      ],
      raw: `Hello, I'm so glad to write to you!
    When shall we meet? I miss you so much!
    xxx
    Anna`,
      internalDate: new Date(2017, 10, 13, 14, 25),
      folder: "inbox"
    },
    {
      id: "2",
      headers: [
        {
          name: "Anna Lewis",
          value: "a.lewis@ng.com"
        }
      ],
      raw: `Why don't you answer?
    Have I done anything wrong?
    Have I offended you in some way?
    If so, that was not my intention.
    Anyway, I'm looking forward to hearing from you soon.:)
    xxx
    Anna
    `,
      internalDate: new Date(2017, 10, 13, 19, 40),
      folder: "inbox"
    },
    {
      id: "3",
      headers: [
        {
          name: "Monica Henderson",
          value: "m.henderson@ng.com"
        }
      ],
      raw:
        "Anna asked to write. You don't seem to answer, she's getting nervous. Don't ignore her.",
      internalDate: new Date(2017, 10, 15, 11, 10),
      folder: "inbox"
    }
  ];
