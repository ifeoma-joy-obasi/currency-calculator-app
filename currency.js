let cur_rates = {
	bm: [962.000, 1195.000, 1032.000, 0],
	cbn: [588.000, 745.000, 640.000, 0],
	bdc: [598.000, 763.000, 455.000, 0],
	moneygram: [450.000, 0.000, 492.000, 0],
	westernunion: [450.000, 0.000, 489.000, 0],
	fx: [458.000, 0.000, 486.000, 0],
}; 

let display = document.querySelector("#display");
	
    
    let v = 0;
    
	
	let nRate = "";
	let nCurrency = "";
	
	//getting tne two input fields
	let naira = document.querySelector("#nairavalue");
	let dollar = document.querySelector("#dollarvalue");
	
	dollar.addEventListener("input", correctRate, false);
	naira.addEventListener("input", correctRate, false);
	
    //getting the two select input fields
	let rate = document.querySelector("#rate");
	let currency = document.querySelector("#currency");
	
	rate.addEventListener("change", adjustRate, false);
	currency.addEventListener("change", adjustRate, false);
	

function adjustRate(e) {
v = (cur_rates[rate.value])[currency.value];

dollar.value = (naira.value / v).toFixed(4);
nRate = rate.options[rate.selectedIndex].text;

nCurrency = currency.options[currency.selectedIndex].text;

display.innerHTML = "1 " + nCurrency + " = &#8358; " + v + " <span>(@ " + nRate + " Rate)</span>";

}

function correctRate(e){
if(e.target === dollar){
v = (cur_rates[rate.value])[currency.value];
naira.value = (dollar.value * v).toFixed(0);
}
else if(e.target === naira){
v = (cur_rates[rate.value])[currency.value];
dollar.value = (naira.value / v).toFixed(4);
}
}

adjustRate();