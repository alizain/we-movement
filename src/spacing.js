function calc(series, multiple, iters = 0) {
  const next = (series[0] - series[1]) * multiple + series[0]
  const nextSeries = [Math.round(next * 100) / 100].concat(series)
  if (iters <= 0) {
    return nextSeries
  } else {
    return calc(nextSeries, multiple, iters - 1)
  }
}

console.log(calc([1, 0.75], 1.5, 8).reverse())
