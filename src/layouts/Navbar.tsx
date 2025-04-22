import React from "react";
import { PictureOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { SlCamrecorder } from "react-icons/sl";
import { LuLogs } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "跌倒事件記錄",
    icon: <LuLogs />,
    children: [
      { key: "picture", label: "圖片", icon: <PictureOutlined /> },
      { key: "video", label: "影片", icon: <SlCamrecorder /> },
    ],
  },

  {
    key: "sub2",
    label: "系統設定",
    icon: <VscSettings />,
    children: [{ key: "3", label: "系統設定 1" }],
  },
  {
    key: "sub3",
    label: "偏好設定",
    icon: <SettingOutlined />,
    children: [{ key: "4", label: "偏好設定 1" }],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "登出",
    icon: <CiLogout />,
    style: {
      color: "red",
    },
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    // 用 / 組合起來（但要注意 keyPath 是從下往上）
    const fullPath = "/" + e.keyPath.reverse().join("/");
    console.log("Navigating to:", fullPath);
    navigate(fullPath);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256, height: "100vh" }}
      defaultSelectedKeys={["picture"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default Navbar;
