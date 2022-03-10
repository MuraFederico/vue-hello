const arrNomi = ['pippo', 'PLUTO', 'Paperino'];
const arrNomi2 = arrNomi.map(nome => nome.toLowerCase()).map(nome => nome[0].toUpperCase() + nome.slice(1))

 console.log(arrNomi2)


 const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  ]

  const mammiferi = animals.filter(animal => {
      if (animal.classe == 'mammiferi') {
          return true
      }
  })

 console.log(mammiferi)

 const persone = [
     {
        nome: 'Federico',
        cognome: 'Mura',
        eta: 23
     },
     {
        nome: 'Pinco',
        cognome: 'Rossi',
        eta: 18
     },
     {
        nome: 'Pallo',
        cognome: 'Bianchi',
        eta: 16
     },
 ]

 const canDrive = persone.map(persona => {
     if (persona.eta >= 18) {
        persona.guida = `${persona.nome} ${persona.cognome} puo guidare`
     } else
        persona.guida = `${persona.nome} ${persona.cognome} non puo guidare`
     
     return persona
 })

 console.log(canDrive)
