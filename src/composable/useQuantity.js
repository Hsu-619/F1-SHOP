// 計算總金額
const totalQuantity = (arr = []) => {
    return arr.reduce((acc, item) => acc + item.quantity, 0);
    };

export { totalQuantity };