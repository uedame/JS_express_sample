// ★require と import の違い
// 簡単にいうと、nodeモジュールの読み込み形式の違い。
// require　は 「CommonJS」 形式によるモジュールの読み込み方法。
// import は 「ECMAScript」 形式によるモジュールの読み込み方法。
// importによるモジュール読み込みが定義されたのは ES2015(ES6) から。
// このため、import形式の方が新しい読み込み方法となる。
// GitHub で node.js のコードを眺めていると、「ESM」とか
// 「ESModule」という略語を目にすることがある。
// これは「ECMAScript Module」の略称を指す。

// import {express} from express;//こっちは使えね
const express = require("express");
const app = express();
const PORT = 3003;
const userRouter = require("./routes/user");

// ルーティング設定
app.use("/user", userRouter);

// publicフォルダの中身を表示
app.use(express.static("public"));

// get設定
app.get("/", (req, res) => {
	console.log("getだぜ");
	// res.status(200).send("繋がりました");
	// res.send("こんにわ");
	const name = {
		name: "Tom",
		age: 12,
		hobby: "PG"
	};
	// res.send(name);
	res.json(name);
})


app.listen(PORT, (req, res) => {
	console.log("listenは必要");
})
