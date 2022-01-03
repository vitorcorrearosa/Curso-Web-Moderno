const bhaskra = function (ax2, bx, c) {
  if (bx >= 0 && c >= 0) {
    const bhaskra = Math.pow(ax2, 2) + bx + c
  } else if (bx <= 0 && c >= 0) {
    bhaskra = Math.pow(ax2, 2) - bx + c
  } else if (bx >= 0 && c <= 0) {
    bhaskra = Math.pow(ax2, 2) + bx - c
  } else if (bx <= 0 && c <= 0) {
    bhaskra = Math.pow(ax2, 2) - bx - c
  }
  if (bhaskra < 0) {
    return console.log('Delta é negativo')
  } else {
    return console.log(`${bhaskra}`)
  }
}

bhaskra(-12, 5, 6)
