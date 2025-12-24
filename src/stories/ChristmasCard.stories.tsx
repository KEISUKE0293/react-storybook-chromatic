import type { Meta, StoryObj } from "@storybook/react";
import { ChristmasCard } from "../components/ChristmasCard";

// この設定（meta）を export default する必要があります
const meta = {
  title: "Event/ChristmasCard",
  component: ChristmasCard,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ChristmasCard>;

export default meta; // ← エラーの原因は、この行が無いか、読み取れていないことです

type Story = StoryObj<typeof meta>;

// --- 各パターンの定義 ---

// PCサイズ（標準）
export const DefaultPC: Story = {};

// スマホサイズ (iPhone SE)
export const MobileSP: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// タブレットサイズ (iPad)
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
