import type {CommonIconProps} from '../types';

const CrossIcon = (props: CommonIconProps) => {
  const {width = '24', height = '24', ...otherProps} = props;

  return (
    <svg
      {...otherProps}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.646 6.754a.5.5 0 0 0 0-.708l-.692-.692a.5.5 0 0 0-.708 0L12 10.6 6.754 5.354a.5.5 0 0 0-.708 0l-.692.692a.5.5 0 0 0 0 .708L10.6 12l-5.246 5.246a.5.5 0 0 0 0 .708l.692.692a.5.5 0 0 0 .708 0L12 13.4l5.246 5.246a.5.5 0 0 0 .708 0l.692-.692a.5.5 0 0 0 0-.708L13.4 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export {CrossIcon};
