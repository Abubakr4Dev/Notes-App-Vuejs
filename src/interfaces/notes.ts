export interface INotes {
  title: string;
  content: string;
  updatedAt: string;
  _id: string;
}

export interface INote {
  _id?: string;
  title: string;
  content: string;
}

export interface IUpdatedNote {
  _id?: string;
  title?: string;
  content?: string;
}
