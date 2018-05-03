import { Pipe, PipeTransform } from "@angular/core";
import { Message } from "./classes/message";

@Pipe({
  name: "filterApply"
})
export class FilterApplyPipe implements PipeTransform {
  transform(filteredMessages: Message[], args: any = ""): Message[] {
    return filteredMessages.filter(message =>
      message.raw
        .toUpperCase()
        .trim()
        .includes(args.toUpperCase().trim())
    );
  }
}
