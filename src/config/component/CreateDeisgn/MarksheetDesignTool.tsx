import React, { useState, useRef } from 'react';
import { Stage, Layer, Rect, Text, Line, Transformer } from 'react-konva';
import { FaSquare, FaFont, FaPen } from 'react-icons/fa';

interface RectangleElement {
  type: 'rectangle';
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
}

interface TextElement {
  type: 'text';
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fill: string;
}

interface TriangleElement {
  type: 'triangle';
  id: string;
  points: number[];
  fill: string;
}

type Element = RectangleElement | TextElement | TriangleElement;

const DesignTool: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(null);
  const canvasRef = useRef<any>();

  const handleAddRectangle = () => {
    const newElement: RectangleElement = {
      type: 'rectangle',
      id: `rectangle-${Date.now()}`,
      x: 50,
      y: 50,
      width: 100,
      height: 50,
      fill: 'blue',
    };
    setElements([...elements, newElement]);
  };

  const handleAddText = () => {
    const newElement: TextElement = {
      type: 'text',
      id: `text-${Date.now()}`,
      text: 'Sample Text',
      x: 50,
      y: 150,
      fontSize: 18,
      fill: 'black',
    };
    setElements([...elements, newElement]);
  };

  const handleAddTriangle = () => {
    const newElement: TriangleElement = {
      type: 'triangle',
      id: `triangle-${Date.now()}`,
      points: [150, 150, 200, 200, 250, 150],
      fill: 'green',
    };
    setElements([...elements, newElement]);
  };

  const handleDragMove = (index: number, newPos: { x: number; y: number }) => {
    const updatedElements = [...elements];
    const element = updatedElements[index];

    if (element.type === 'rectangle') {
      (element as RectangleElement).x = newPos.x;
      (element as RectangleElement).y = newPos.y;
    } else if (element.type === 'triangle') {
      const deltaX = newPos.x - (element as TriangleElement).points[0];
      const deltaY = newPos.y - (element as TriangleElement).points[1];
      const newPoints = (element as TriangleElement).points.map((point, i) =>
        i % 2 === 0 ? point + deltaX : point + deltaY
      );
      (element as TriangleElement).points = newPoints;
    }

    setElements(updatedElements);
  };



  const handleTextChange = (index: number, newText: string) => {
    const updatedElements = [...elements];
    if (updatedElements[index].type === 'text') {
      (updatedElements[index] as TextElement).text = newText;
      setElements(updatedElements);
    }
  };

  const handleElementSelect = (id: string) => {
    setSelectedElementId(id);
  };

  const handleTransformEnd = (index: number, newProps: any) => {
    const updatedElements = [...elements];
    const element = updatedElements[index];
    if (element.type === 'rectangle') {
      const { x, y, width, height } = newProps;
      element.x = x;
      element.y = y;
      element.width = width;
      element.height = height;
    } else if (element.type === 'triangle') {
      const newPoints = newProps.points;
      element.points = newPoints;
    }
    setElements(updatedElements);
  };

  return (
    <div>
      <div className="toolbar">
        <button className="tool-button" onClick={handleAddRectangle}>
          <FaSquare /> Add Rectangle
        </button>
        <button className="tool-button" onClick={handleAddText}>
          <FaFont /> Add Text
        </button>
        <button className="tool-button" onClick={handleAddTriangle}>
          <FaPen /> Add Triangle
        </button>
      </div>
      <div className="canvas-container">
        <Stage
          width={800}
          height={600}
          ref={canvasRef}
          onClick={() => setSelectedElementId(null)}
        >
          <Layer>
            {elements.map((element, index) => {
              if (element.type === 'rectangle') {
                return (
                  <React.Fragment key={element.id}>
                    <Rect
                      x={element.x}
                      y={element.y}
                      width={element.width}
                      height={element.height}
                      fill={element.fill}
                      draggable
                      onDragMove={(e) => handleDragMove(index, e.target.position())}
                      onClick={() => handleElementSelect(element.id)}
                    />
                    {selectedElementId === element.id && (
                      <Transformer
                        anchorSize={6}
                        borderDash={[6, 2]}
                        borderEnabled
                        onTransformEnd={(e) => {
                          handleTransformEnd(index, e.currentTarget.attrs);
                        }}
                        nodes={[canvasRef.current.findOne(`#${element.id}`)]}
                      />
                    )}
                  </React.Fragment>
                );
              } else if (element.type === 'text') {
                return (
                  <React.Fragment key={element.id}>
                    <Text
                      x={element.x}
                      y={element.y}
                      fontSize={element.fontSize}
                      fill={element.fill}
                      text={element.text}
                      draggable
                      onClick={() => handleElementSelect(element.id)}
                      onDblClick={() => {
                        const newText = window.prompt('Enter new text:', element.text);
                        if (newText) {
                          handleTextChange(index, newText);
                        }
                      }}
                    />
                    {selectedElementId === element.id && (
                      <Transformer
                        rotateEnabled={false}
                        onTransformEnd={(e) => {
                          handleTransformEnd(index, e.currentTarget.attrs);
                        }}
                        nodes={[canvasRef.current.findOne(`#${element.id}`)]}
                      />
                    )}
                  </React.Fragment>
                );
              } else if (element.type === 'triangle') {
                return (
                  <React.Fragment key={element.id}>
                    <Line
                      points={element.points}
                      closed
                      fill={element.fill}
                      draggable
                      onDragMove={(e) => handleDragMove(index, e.target.position())}
                      onClick={() => handleElementSelect(element.id)}
                      onTransformEnd={(e) => {
                        handleTransformEnd(index, e.currentTarget.attrs);
                      }}
                    />
                    {selectedElementId === element.id && (
                      <Transformer
                        anchorSize={6}
                        borderDash={[6, 2]}
                        borderEnabled
                        onTransformEnd={(e) => {
                          handleTransformEnd(index, e.currentTarget.attrs);
                        }}
                        nodes={[canvasRef.current.findOne(`#${element.id}`)]}
                      />
                    )}
                  </React.Fragment>
                );
              }
              return null;
            })}
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default DesignTool;
