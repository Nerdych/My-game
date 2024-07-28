import type {ChangeEvent} from 'react';
import type {Tag, TagCategory} from '@entities/tag';
import type {CloseProp} from '@shared/providers/modal';
import type {ModalProps} from '@shared/ui-kit/Modal';

type UseTagsModalParams = Tag[];
type AddTag = (tag: Tag) => void;
type OnAddTag = AddTag;
type RemoveTag = (tag: Tag) => void;
type OnRemoveTag = RemoveTag;
type OnClickTag = (tag: Tag, event: ChangeEvent<HTMLInputElement>) => void;
type IsTagInclude = (tag: Tag) => boolean;

type TagsModalResult = Tag[];
type TagsModalProps = ModalProps & CloseProp<TagsModalResult>;

type DefaultTagsProps = {
  defaultCategoriesWithTags: TagCategory[];
  onClickTag: OnClickTag;
  isTagInclude: IsTagInclude;
};

type DefaultTagProps = {
  onClickTag: OnClickTag;
  tag: Tag;
  checked: boolean;
};

type TagsListProps = {
  tags: Tag[];
  onAddTag: OnAddTag;
  onRemoveTag: OnRemoveTag;
};

type TagProps = {
  tag: Tag;
  onRemoveTag: OnRemoveTag;
};

export type {
  TagsModalProps,
  DefaultTagsProps,
  DefaultTagProps,
  TagsListProps,
  TagProps,
  UseTagsModalParams,
  OnAddTag,
  OnRemoveTag,
  OnClickTag,
  AddTag,
  RemoveTag,
  IsTagInclude,
};
