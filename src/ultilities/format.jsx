export const formatVND = (item) =>
  Number(item).toLocaleString('vi-VI', {
    style: 'currency',
    currency: 'VND',
  })
