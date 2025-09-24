//your JS code here. If required.
const input = document.getElementById("ip")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

const updateDom = (value, delay=1000)=>{
	return new Promise((resolve)=> {
		setTimeout(()=> {
			output.innerHTML = value;
			resolve(value)
		},delay)
	})
}

btn.addEventListener("click", ()=> {
	const value = Number(input.value)
	 updateDom(value, 2000)
	.then((value) => updateDom(value*2))
	.then((value) => updateDom(value-3))
	.then((value) => updateDom(value/2))
	.then((value) => updateDom(value+10))
})