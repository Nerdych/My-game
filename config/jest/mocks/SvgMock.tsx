import React, {FC, SVGProps} from 'react';

const SvgMock: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <svg {...props} />;
};

export default SvgMock;
