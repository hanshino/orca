import * as React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  AppProvider,
  Branding,
  type Navigation,
} from "@toolpad/core/AppProvider";
import Favicon from "./icon.svg";
import Image from "next/image";
import { DashboardLayout } from "@toolpad/core";

// 調整導航選單，與你的專案功能對應
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "遊戲工具",
  },
  {
    title: "ARC", // 針對 ARC 系統的主要頁面
    segment: "arc-progress", // 頁面 URL 對應
    icon: <TimelineIcon />,
  },
  {
    title: "Daily", // 預備 Todo List 功能，之後可以開發
    segment: "daily-todo",
    icon: <CheckBoxIcon />,
  },
];

// 更新專案名稱，讓 Branding 與專案一致
const BRANDING: Branding = {
  title: "Orca",
  logo: <Image src={Favicon} alt="logo" width={32} height={32} />,
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="zh-tw" data-toolpad-color-scheme="light">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body>
        <AppProvider navigation={NAVIGATION} branding={BRANDING}>
          <DashboardLayout defaultSidebarCollapsed>
            {props.children}
          </DashboardLayout>
        </AppProvider>
      </body>
    </html>
  );
}
