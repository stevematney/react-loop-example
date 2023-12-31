import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const BlackBoxContainer = styled.div`
  border: 4px solid #444;
  border-radius: 7px;
  padding: 10px;
  max-width: 500px;
`;

const BlackBoxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-weight: bold;
    margin-left: 10px;
  }
`;

const BlackBoxSelect: React.FC<{
  items: string[];
  onChange?: (selectedItems: string[]) => void;
}> = (props) => {
  const { items } = props;
  const propsRef = useRef(props);
  propsRef.current = props;
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const hasRendered = useRef(false);

  const updateItems = (item: string) =>
    setSelectedItems((oldItems) =>
      oldItems.includes(item)
        ? oldItems.filter((i) => i !== item)
        : [...oldItems, item]
    );

  useEffect(() => {
    if (!hasRendered.current) return;

    propsRef.current.onChange?.(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    hasRendered.current = true;
  }, []);

  return (
    <BlackBoxContainer>
      {items.map((item) => (
        <BlackBoxLabel key={item}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => updateItems(item)}
          />
          <p>{item}</p>
        </BlackBoxLabel>
      ))}
    </BlackBoxContainer>
  );
};

export default BlackBoxSelect;
