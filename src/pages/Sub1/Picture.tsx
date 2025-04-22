import { Input, Space } from "antd";

export default function Picture() {
  return (
    <div>
      <Input />
      <Space
        style={{
          padding: "1rem",
        }}
      >
        {/* 假設圖片 */}
        <RedBoxes />
      </Space>
    </div>
  );
}

const RedBoxes: React.FC = () => {
  const boxes = Array.from({ length: 30 });

  return (
    <div className="red-boxes">
      {boxes.map((_, index) => (
        <div
          key={index}
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
          }}
        />
      ))}
    </div>
  );
};
