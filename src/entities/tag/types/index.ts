interface ITag {
  name: string;
}

type TagConstructorParams = Pick<ITag, 'name'>;

interface ITagCategory {
  name: string;
  tags: ITag[];
}

type TagCategoryConstructorParams = Pick<ITagCategory, 'name' | 'tags'>;

export type {ITag, TagConstructorParams, ITagCategory, TagCategoryConstructorParams};
