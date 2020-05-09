import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(columns, itemInfo, services) {
    //itemInfo
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    //columns
    this.columns = columns
    //servers
    this.services = services
  }
}

export function getRecommend() {
  return request({
    url: 'recommend'
  })
}

