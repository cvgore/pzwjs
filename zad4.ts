interface Osoba {
	imie: string,
	wiek: number
}

function pokaz(osoba: Osoba): void {
	console.log(osoba.imie, osoba.wiek);
}


pokaz({
	imie: 'test', wiek: 33
});