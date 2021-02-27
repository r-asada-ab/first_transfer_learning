import { Loader } from "./Loader"

const dataUrl = "https://storage.googleapis.com/tfjs-models/tfjs/mnist_transfer_cnn_v1/gte5.train.json"

function main() {
    // データのロードボタンが押されたとき
    let loadDataButon = document.getElementById("load_data_button")
    loadDataButon.addEventListener("click", async () => {
        let isExists =  await Loader.isExsits(dataUrl)
        if (isExists) {
            Loader.loadData(dataUrl)
        } else {
            console.log("Data not exists")
        }
        
    })

    // モデルのロードボタンが押されたとき
    let loadModelButon = document.getElementById("load_model_button")
    loadModelButon.addEventListener("click", () => {

    })

    // 転移学習ボタンが押されたとき
    let retrainButton = document.getElementById("retrain_button")
    retrainButton.addEventListener("click", () => {

    })
}

main()