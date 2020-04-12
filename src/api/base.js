const base = {
    baseUrl:"/api",
    login:"/login",
    selectTbItemAllByPage:"/backend/item/selectTbItemAllByPage", // 商品查询地址
    total:"/total", // product总条数
    selectItemCategoryByParentId:"/backend/itemCategory/selectItemCategoryByParentId", // 类目查询接
    insertTbItem:"/backend/item/insertTbItem", // 添加产品
    deleteItemById:"/backend/item/deleteItemById", // 删除产品
    preUpdateItem:"/backend/item/preUpdateItem", // 预更新
    updateTbItem:"/backend/item/updateTbItem", // 更新产品
}

export default base;