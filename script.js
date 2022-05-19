// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
	nav.classList.toggle('slide');
})


// Kalkulator Seduh

function cal (){
	const r = parseInt(document.getElementById("r").value);
	const g = parseInt(document.getElementById("g").value);

	document.getElementById('hasil').value = r*g;
}


const hitung = document.querySelector('#opr');

hitung.addEventListener('click', function(event) {
	cal()
});


function manisAsam (manis = document.querySelector('#manis').value){
	if (manis === "high") {
		document.querySelector('#asam').value = "Low";
	} else if (manis === "medium") {
		document.querySelector('#asam').value = "Medium";
	} else {
		document.querySelector('#asam').value = "High";
	}
}

const oke = document.querySelector('#oke');

oke.addEventListener('click', function(event) {
	manisAsam()
});

function pouring (asam, hasil, body) {
	asam = document.querySelector('#asam').value;
	hasil = document.getElementById('hasil').value;
	body = document.querySelector('#body').value;

	if (asam === "Low") {
		document.querySelector('#pr1').value = hasil*(10/100);
		document.querySelector('#pr2').value = hasil*(30/100);
	} else if (asam === 'Medium') {
		document.querySelector('#pr1').value = hasil*(20/100);
		document.querySelector('#pr2').value = hasil*(20/100);
	} else {
		document.querySelector('#pr1').value = hasil*(30/100);
		document.querySelector('#pr2').value = hasil*(10/100);
	}

	if (body === "bold") {
		document.querySelector('#pr3').value = hasil*(15/100);
		document.querySelector('#pr4').value = hasil*(15/100);
		document.querySelector('#pr5').value = hasil*(15/100);
		document.querySelector('#pr6').value = hasil*(15/100);
	} else if (body === "medium") {
		document.querySelector('#pr3').value = hasil*(20/100);
		document.querySelector('#pr4').value = hasil*(20/100);
		document.querySelector('#pr5').value = hasil*(20/100);
		document.querySelector('#pr6').value = " ";
	} else {
		document.querySelector('#pr3').value = hasil*(30/100);
		document.querySelector('#pr4').value = hasil*(30/100);
		document.querySelector('#pr5').value = " ";
		document.querySelector('#pr6').value = " ";
	}
}

const selesai = document.querySelector('#selesai');

selesai.addEventListener('click', function(event) {
	pouring()
});

function clear (){
	document.getElementById("g").value = null;
	document.getElementById("r").value = '15';
	document.getElementById("manis").value = 'high' ;
	document.getElementById("asam").value = '';
	document.getElementById("body").value = 'bold' ;
	document.getElementById('hasil').value = '0';
	const tuang = document.querySelectorAll(".tuang");
	for (let i = 0; i < tuang.length ; i++) {
		tuang[i].value = '0';
	}
}

const hapus = document.querySelector('#cls');

hapus.addEventListener('click', function(event) {
	clear()
});
