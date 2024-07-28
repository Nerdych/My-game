import {useCallback, useRef, useState} from 'react';
import {useStableCallback} from '@shared/lib/hooks/useStableCallback';
import type {Tag} from '@entities/tag';
import type {AddTag, IsTagInclude, OnAddTag, OnClickTag, OnRemoveTag, RemoveTag, UseTagsModalParams} from '../types';

const transformToMap = (tags: Tag[]) => {
  return new Map(tags.map((tag) => [tag.name, true]));
};

const normalizeTag = (tag: Tag) => {
  return {...tag, name: tag.name.trim()};
};

const useTagsModal = (initialTags: UseTagsModalParams = []) => {
  const tagsMapRef = useRef(transformToMap(initialTags));
  const [tags, setTags] = useState(initialTags);
  const tagsMap = tagsMapRef.current;

  const addTag: AddTag = useStableCallback((tag) => {
    const normalizedTag = normalizeTag(tag);

    if (tagsMap.get(normalizedTag.name) || !normalizedTag.name) {
      return;
    }

    tagsMap.set(normalizedTag.name, true);
    setTags((prev) => [...prev, normalizedTag]);
  });

  const removeTag: RemoveTag = useStableCallback((tag) => {
    const normalizedTag = normalizeTag(tag);

    if (!tagsMap.has(normalizedTag.name)) {
      return;
    }

    tagsMap.delete(normalizedTag.name);
    setTags((prev) => [...prev.filter((currentTag) => currentTag.name !== normalizedTag.name)]);
  });

  const onAddTag: OnAddTag = useStableCallback((tag) => {
    addTag(tag);
  });

  const onRemoveTag: OnRemoveTag = useStableCallback((tag) => {
    removeTag(tag);
  });

  const onClickTag: OnClickTag = useStableCallback((tag, event) => {
    if (event.target.checked) {
      addTag(tag);
      return;
    }

    removeTag(tag);
  });

  const isTagInclude: IsTagInclude = useCallback(
    (tag) => {
      return tagsMap.has(tag.name);
    },
    [tagsMap],
  );

  return {
    tags,
    onAddTag,
    onRemoveTag,
    onClickTag,
    isTagInclude,
  };
};

export {useTagsModal};
