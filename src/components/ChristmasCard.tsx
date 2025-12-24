import "./ChristmasCard.css";

// --- 【修正1】ここから ---
// 先ほど作った SantaIllustration の import は削除します。
// import { SantaIllustration } from './SantaIllustration';

// 代わりに、assetsフォルダに置いた画像を import します。
// （名前は自由ですが、わかりやすく image などを付けています）
import santaImage from "../assets/santa.png";
import treeImage from "../assets/tree.png";
import snowmanImage from "../assets/snowman.png";
// --- 【修正1】ここまで ---

export const ChristmasCard = () => {
  return (
    <div className="xmas-card-container">
      {/* 背景の雪（変更なし） */}
      <div className="snowflakes" aria-hidden="true">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="snowflake">
              ❄️
            </div>
          ))}
      </div>

      <div className="content-grid">
        {/* タイトル（変更なし） */}
        <h1 className="xmas-title item-title">
          <span className="merry">Merry</span>
          <span className="xmas">Xmas!</span>
        </h1>

        {/* --- 【修正2】ここから：すべて img タグに変更し、importした画像を使います --- */}

        {/* サンタクロース */}
        <img
          className="illustration item-santa" // classNameはそのまま維持（配置とアニメーション用）
          src={santaImage} // importした画像変数を指定
          alt="サンタクロースとトナカイ"
        />

        {/* クリスマスツリー */}
        <img
          className="illustration item-tree"
          src={treeImage} // 外部URLからローカル画像に変更
          alt="クリスマスツリー"
        />

        {/* 雪だるま */}
        <img
          className="illustration item-snowman"
          src={snowmanImage} // 外部URLからローカル画像に変更
          alt="雪だるま"
        />

        {/* --- 【修正2】ここまで --- */}
      </div>
    </div>
  );
};
