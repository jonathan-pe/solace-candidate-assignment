import { Button, Input } from "antd";
import { Key } from "react";

const StringFilterDropdown = (
  setSelectedKeys: (keys: Key[]) => void,
  selectedKeys: Key[],
  confirm: () => void
) => (
  <div style={{ padding: 8 }}>
    <Input
      placeholder="Search"
      value={selectedKeys[0]}
      onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
      onPressEnter={() => confirm()}
    />
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
);

export default StringFilterDropdown;
