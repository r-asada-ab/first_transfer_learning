import { Loader } from "./Loader"

// 訓練データのURL
const trainDataUrl = "https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/gte5.train.json"
// モデルのURL
const modelUrl = "https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/model.json"

function main() {
    // データのロードボタンが押されたとき
    let loadDataButon = document.getElementById("load_data_button")
    loadDataButon.addEventListener("click", async () => {
        let isExists =  await Loader.isExsits(trainDataUrl)
        if (isExists) {
            Loader.loadData(trainDataUrl)
        } else {
            console.log("Data not exists")
        }        
    })

    // モデルのロードボタンが押されたとき
    let loadModelButon = document.getElementById("load_button")
    loadModelButon.addEventListener("click", () => {
        // データのロード

        // モデルのロード

        // 訓練の準備
    })

    // 転移学習ボタンが押されたとき
    let retrainButton = document.getElementById("retrain_button")
    retrainButton.addEventListener("click", () => {
        // 再訓練開始

    })
}

main()