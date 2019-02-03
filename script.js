const cel =document.querySelector('#celsius > input');
const fahr =document.querySelector('#fahrenheit > input');
const kel =document.querySelector('#kelvin > input');

function roundNum(num) {
	return Math.round(num * 100)/100
}

function celsiusto() {

	const ctemp =  parseFloat(cel.value);
	const ftemp = (ctemp * (9/5)) + 32;
	const ktemp = ctemp + 273.15;
	fahr.value = roundNum(ftemp);
	kel.value = roundNum(ktemp);
}

function fahrenheitto() {
	const ftemp = parseFloat(fahr.value);
	const ctemp = (ftemp - 32) * (5/9); 
	const ktemp = (ftemp + 459.67) * (5/9);
	cel.value = roundNum(ctemp);
	kel.value = roundNum(ktemp); 
}
function kelvinto() {
	const ktemp = parseFloat(kel.value);
	const ctemp = ktemp - 273.15; 
	const ftemp = (9/5) * (ktemp - 273) + 32;
	cel.value =  roundNum(ctemp);
	fahr.value = roundNum(ftemp)	
}
function main(){
	cel.addEventListener('input',celsiusto);
	fahr.addEventListener('input',fahrenheitto);
	kel.addEventListener('input', kelvinto);

}
main();
