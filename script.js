new Swiper('.slider')

const date = new Date()
console.log(date)
let futureDate = new Date()
if (date.getDay()) {
	futureDate.setDate(date.getDate() + 8 - date.getDay())
} else {
	futureDate.setDate(date.getDate() + 1)
}
const dateNeedFormat = new Intl.DateTimeFormat().format(futureDate)

const sale = document.getElementById('sale')
sale.textContent = dateNeedFormat
