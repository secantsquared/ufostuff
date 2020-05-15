// Read in the data, using d3

const tableData = data
const tbody = d3.select('tbody')

function buildTable(data) {
  // clear the table initially
  tbody.html('')

  data.map(row => {
    const tr = tbody.append('tr')
    Object.values(row).map(value => {
      let cell = tr.append('td')
      cell.text(value)
    })
  })
}

function handleClick() {
  const date = d3.select('#datetime').property('value')
  let filteredData = []

  if (date) {
    filteredData = data.filter(row => row.datetime === date)
  }

  buildTable(filteredData)
}

d3.select('#reset').on('click', function () {
  buildTable(data)
})
d3.select('#filter-btn').on('click', handleClick)
buildTable(data)
