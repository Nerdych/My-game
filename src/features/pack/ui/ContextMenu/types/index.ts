import type {PropsWithChildren, RefObject} from 'react';

type UseContextMenuResult = {
  ref: RefObject<Element>;
};
type UseContextMenu = () => UseContextMenuResult;

type WrapperContextProps = PropsWithChildren;

export type {UseContextMenu, WrapperContextProps};
