import * as tf from "@tensorflow/tfjs";
import { Util } from "./Util";

// モデルのダウンロードを行うクラス
export class Loader {

    // URLが存在するか
    static async isExsits(url: string): Promise<boolean> {
        try {
            const res = await fetch(url, {method: 'HEAD'})
            return res.ok
        } catch (error) {
            return false
        }
    }

    // リモート上に存在するモデルをロードする
    static async loadPretrainedModel(url: string): Promise<tf.LayersModel | null> {
        try {
            const model = await tf.loadLayersModel(url)
            return model
        } catch(error) {
            console.error(error)
            return null
        }
    }

    // リモード上に存在するデータをロードする
    static async loadData(url: string) {
        try {
            const res = await fetch(url)
            const data = await res.json()
            Util.convertToBatchData(data)
        } catch(error) {
            console.error(error)
        }
    }
}