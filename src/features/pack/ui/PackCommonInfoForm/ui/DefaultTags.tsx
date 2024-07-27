import type {FC} from 'react';
import type {DefaultTagsProps} from '../types';

const DefaultTags: FC<DefaultTagsProps> = (props) => {
  const {defaultCategoriesWithTags} = props;

  return (
    <>
      <input type="checkbox" id="tags" name="tags" />
      <label htmlFor="tags">Tag 1</label>
      <label htmlFor="tags">Tag 2</label>
      {/* <ul>
        {defaultCategoriesWithTags.map((category) => (
          <li key={category.name}>
            <ul>
              {category.tags.map((tag) => (
                <li key={tag.name}>{tag.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export {DefaultTags};
