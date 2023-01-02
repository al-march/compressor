import { ConvertTypes } from "./Store";

export class ConvertImage {
  type: ConvertTypes = ConvertTypes.INITIAL;

  constructor(
    public file: File
  ) { }
}
