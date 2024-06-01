import React, { useRef, useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
    minWidth?: number;
    minHeight?: number;
    edgeWidth?: number;
}

const ResizableAndDraggableComponent = ({ children, minWidth = 100, minHeight = 100, edgeWidth = 10 }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 200, height: 200 });
  const ref = useRef(null);

  const handleMouseDown = (event:any) => {
    event.preventDefault();
    if (event.target === ref.current) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
    if (isDragging) {
      setPosition({ x: event.clientX - position.x, y: event.clientY - position.y });
    } else if (isResizing) {
      setSize({
        width: Math.max(event.clientX - position.x + size.width, minWidth),
        height: Math.max(event.clientY - position.y + size.height, minHeight),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleMouseEnter = (event: any) => {
    if (event.target === ref.current) {
      setIsResizing(true);
    }
  };

  const handleMouseLeave = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="resizable-and-draggable-component"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        backgroundColor: 'white',
        border: '1px solid black',
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        className="resizable-and-draggable-component-edge"
        style={{
          position: 'absolute',
          right: -edgeWidth,
          bottom: -edgeWidth,
          width: edgeWidth,
          height: edgeWidth,
          cursor: 'se-resize',
        }}
      />
    </div>
  );
};

export default ResizableAndDraggableComponent;
