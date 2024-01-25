import { GistFileType } from "./gistFile.type";

export type GistApiType = {
  public: boolean;
  description?: string;
  files: {[key: string]: GistFileType | null};
};
