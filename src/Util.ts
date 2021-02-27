import * as tf from "@tensorflow/tfjs";
import BatchData from "./BatchData";

export class Util {

    // ラベルをOneHot表現に変換する
    private static convertToOneHot(index: number, numClasses: number) {
        const ret = []
        for (let i = 0; i< numClasses; i++) {
            if (i == index) {
                ret.push(1)
            } else {
                ret.push(0)
            }
        }
    }

    // 画像データのテンソルを生成する
    private static createImageTensor(data: any): tf.Tensor4D {
        const num = data.length as number
        const height = 28
        const width = 28

        const values = []
        
        data.map(example => {
            values.push(example.x / 255.0)
        })

        return tf.reshape(values, [num, height, width, 1])
    }

    // ラベルデータのテンソルを生成する
    private static createLabelTensor(data: any): tf.Tensor2D {
        const num = data.length as number
        const numClasses = 5

        const values = []

        data.map(example => {
            values.push(this.convertToOneHot(example.y, numClasses))
        })

        return tf.reshape(values, [num, numClasses])
    }

    // データをテンソルに変換する
    static convertToBatchData(data: any): BatchData {
        let xs = Util.createImageTensor(data)
        let labels = Util.createLabelTensor(data)
        return new BatchData(xs, labels)
    }
}