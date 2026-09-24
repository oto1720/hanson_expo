// ============================================================
// 【インポート】ほかのファイルや部品を「持ってくる」宣言
// ============================================================

// React の「useState」という機能を持ってくる。
// { } で囲むのは「その中の名前のものだけを取り出す」という意味（名前付きインポート）。
import { useState } from 'react';

// Expo の「画面上部のステータスバー（時計や電池のところ）」を制御する部品。
import { StatusBar } from 'expo-status-bar';

// React Native が用意している画面部品たち。
//   Pressable  … 押せる領域（ボタンを作るための土台）
//   StyleSheet … 見た目（スタイル）をまとめて定義する道具
//   Text       … 文字を表示する部品（Webの<p>や<span>に近い）
//   View       … 箱・入れ物（Webの<div>に近い）。中に部品を並べる
import { Pressable, StyleSheet, Text, View } from 'react-native';

// ============================================================
// 【コンポーネント本体】App という「画面の部品」を作る
// ============================================================

// export default … このファイルの「主役」を外に公開する宣言。
// function App() … 「App」という名前の関数。React ではこの関数が1つの画面/部品になる。
// この関数が「画面の見た目」を return（返す）と、それが実際に表示される。
export default function App() {
  // --- 状態(state)を用意する ---
  // useState(0) は「初期値 0 の記憶する箱」を作る命令。
  // 返ってくるのは2つセット。それを [ , ] で受け取る（配列の分割代入）。
  //   count    … 現在の値（読み取り専用のつもりで使う）
  //   setCount … count を書き換えるための専用の関数
  // ★ count を直接 count = 5 のように書き換えてはいけない。
  //    必ず setCount(...) を使う。そうすると React が画面を自動で描き直してくれる。
  const [count, setCount] = useState(0);

  // return（ ) の中に「画面の見た目」を書く。
  // この < > で書く HTML っぽいものは JSX と呼ばれる React の書き方。
  return (
    // View = 一番外側の箱。style={styles.container} で見た目を適用。
    // { } の中は「JavaScriptの値」を書く場所。styles.container はあとで下で定義している。
    <View style={styles.container}>
      {/* ↑ これは JSX の中のコメントの書き方（ { } で囲む） */}

      {/* タイトル文字 */}
      <Text style={styles.title}>カウンター</Text>

      {/* 現在の数字を表示。{count} で状態の値を画面に差し込む */}
      <Text style={styles.count}>{count}</Text>

      {/* ボタンを横並びにするための箱 */}
      <View style={styles.buttonRow}>
        {/* マイナスボタン */}
        <Pressable
          // style は配列で複数まとめて適用できる（共通スタイル＋色）
          style={[styles.button, styles.minusButton]}
          // onPress = 押されたときに実行する処理。
          // () => setCount(...) は「押されたら実行する関数」を渡している（アロー関数）。
          // (prev) => prev - 1 は「今の値 prev を受け取って、1引いた値を新しい値にする」意味。
          onPress={() => setCount((prev) => prev - 1)}
        >
          <Text style={styles.buttonText}>-1</Text>
        </Pressable>

        {/* プラスボタン。上とほぼ同じで、+1 するだけ */}
        <Pressable
          style={[styles.button, styles.plusButton]}
          onPress={() => setCount((prev) => prev + 1)}
        >
          <Text style={styles.buttonText}>+1</Text>
        </Pressable>
      </View>

      {/* リセットボタン。押したら count を 0 に戻す */}
      <Pressable style={styles.resetButton} onPress={() => setCount(0)}>
        <Text style={styles.resetText}>リセット</Text>
      </Pressable>

      {/* 画面上部のステータスバー。style="auto" は背景に合わせて色を自動調整 */}
      <StatusBar style="auto" />
    </View>
  );
}

// ============================================================
// 【スタイル定義】見た目（色・大きさ・配置）をまとめて用意する
// ============================================================

// StyleSheet.create({ ... }) で見た目のルール集を作る。
// 上の JSX から styles.container のように名前で呼び出して使う。
// ★ React Native の単位は基本「数値」でOK（px は書かない）。色は '#ffffff' のような文字列。
const styles = StyleSheet.create({
  // 一番外側の箱の見た目
  container: {
    flex: 1, // 画面いっぱいに広がる（1 = 使える空間を全部使う）
    backgroundColor: '#fff', // 背景色（白）
    alignItems: 'center', // 横方向（左右）で中央そろえ
    justifyContent: 'center', // 縦方向（上下）で中央そろえ
  },
  // 「カウンター」という見出し文字
  title: {
    fontSize: 24, // 文字の大きさ
    fontWeight: '600', // 太さ（数値が大きいほど太い。'bold' でもOK）
    marginBottom: 8, // 下に8の余白
  },
  // 大きく表示する数字
  count: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  // ボタンを横並びにする箱
  buttonRow: {
    flexDirection: 'row', // 子要素を「横方向」に並べる（初期値は 'column' = 縦）
    gap: 16, // 子要素どうしの間隔
  },
  // ＋−ボタン共通のスタイル
  button: {
    width: 80, // 幅
    height: 80, // 高さ（幅と同じにして正方形→丸くする土台）
    borderRadius: 40, // 角の丸み。幅の半分にすると完全な円になる
    alignItems: 'center', // 中の文字を横中央に
    justifyContent: 'center', // 中の文字を縦中央に
  },
  // マイナスボタンの色だけ（上の button と合わせて使う）
  minusButton: {
    backgroundColor: '#ef4444', // 赤
  },
  // プラスボタンの色だけ
  plusButton: {
    backgroundColor: '#3b82f6', // 青
  },
  // ボタン内の「+1」「-1」の文字
  buttonText: {
    color: '#fff', // 文字色（白）
    fontSize: 28,
    fontWeight: 'bold',
  },
  // リセットボタンの見た目
  resetButton: {
    marginTop: 24, // 上の余白
    paddingVertical: 10, // 上下の内側余白
    paddingHorizontal: 24, // 左右の内側余白
    borderRadius: 8, // 少しだけ角を丸く
    backgroundColor: '#e5e7eb', // 薄いグレー
  },
  // リセットボタンの文字
  resetText: {
    fontSize: 16,
    color: '#374151', // 濃いグレー
    fontWeight: '600',
  },
});
