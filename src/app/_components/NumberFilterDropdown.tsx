import { Button, InputNumber } from "antd";
import { Key } from "react";

const NumberFilterDropdown = (
  setSelectedKeys: (keys: Key[]) => void,
  selectedKeys: Key[],
  confirm: () => void,
  placeholder: string = "Search"
) => (
  <div className="p-4 flex flex-col min-w-12">
    <InputNumber
      className="flex-1 w-full"
      placeholder={placeholder}
      value={
        typeof selectedKeys[0] === "number"
          ? (selectedKeys[0] as number)
          : undefined
      }
      min={0}
      onChange={(value) => setSelectedKeys(value ? [value] : [])}
      onPressEnter={() => confirm()}
    />
    <div className="flex">
      <Button
        type="primary"
        onClick={() => confirm()}
        size="small"
        style={{ width: 90, marginTop: 8, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => {
          setSelectedKeys([]);
          confirm();
        }}
        size="small"
        style={{ width: 90, marginTop: 8 }}
      >
        Reset
      </Button>
    </div>
  </div>
);

export default NumberFilterDropdown;
