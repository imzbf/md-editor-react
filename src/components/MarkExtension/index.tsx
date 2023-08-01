import React from 'react';
import { NormalToolbar, InsertContentGenerator } from 'md-editor-rt';

interface MarkExtensionProp {
  insert?: (generator: InsertContentGenerator) => void;
}

const MarkExtension = ({ insert = () => {} }: MarkExtensionProp) => {
  const markHandler = () => {
    const generator: InsertContentGenerator = (selectedText) => {
      return {
        targetValue: `==${selectedText}==`,
        select: true,
        deviationStart: 2,
        deviationEnd: -2
      };
    };

    insert(generator);
  };

  return (
    <NormalToolbar
      title="mark"
      onClick={markHandler}
      trigger={
        <svg className="md-editor-icon" aria-hidden="true">
          <use xlinkHref="#icon-mark"></use>
        </svg>
      }
    ></NormalToolbar>
  );
};

export default MarkExtension;
