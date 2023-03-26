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
