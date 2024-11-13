import { cloneElement, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface IzDrawerProp {
  children: JSX.Element;
  content: JSX.Element;
}

const Drawer = (props: IzDrawerProp) => {
  const triggerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLElement>();
  const [visible, setVisible] = useState(false);

  const changeVisible = useCallback(() => {
    setVisible((_) => {
      if (!_) {
        document.documentElement.classList.add('iz-drawer-root-hidden');
        containerRef.current?.classList.add('open');
        containerRef.current?.classList.remove('close');
      } else {
        contentRef.current?.classList.add('close-content');
        contentRef.current?.classList.remove('open-content');
      }

      return !_;
    });
  }, []);

  useEffect(() => {
    portalRef.current = document.body;
  }, []);

  useEffect(() => {
    if (visible) {
      contentRef.current?.classList.add('open-content');
      contentRef.current?.classList.remove('close-content');
    } else {
      setTimeout(() => {
        containerRef.current?.classList.add('close');
        containerRef.current?.classList.remove('open');
        document.documentElement.classList.remove('iz-drawer-root-hidden');
      }, 300);
    }

    return () => {
      if (visible) {
        document.documentElement.classList.remove('iz-drawer-root-hidden');
      }
    };
  }, [visible]);

  const trigger = cloneElement(props.children, {
    ref: triggerRef,
    onClick: changeVisible,
  });

  return (
    <>
      {trigger}
      {portalRef.current &&
        createPortal(
          <div className="iz-drawer" ref={containerRef} onClick={changeVisible}>
            <div
              className="iz-drawer-content"
              ref={contentRef}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {props.content}
            </div>
          </div>,
          portalRef.current
        )}
    </>
  );
};

export default Drawer;
