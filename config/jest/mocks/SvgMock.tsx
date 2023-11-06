import React from 'react';
import {FC, SVGProps} from 'react';

const SvgMock: FC<SVGProps<SVGSVGElement>> = (props) => {
  return <svg {...props} />;
};

export default SvgMock;
