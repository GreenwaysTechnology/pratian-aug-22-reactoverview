//object destructuring 

// function display(employee) {
//     console.log(`id ${employee.id}`)
//     console.log(`Name ${employee.name}`)
//     console.log(`city ${employee.address.city}`)
// }


// function display(employee) {
//     //destructure object 
//     const { id, name, address: { city } } = employee
//     console.log(`id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }

// function display({ id, name, address: { city } }) {
//     console.log(`id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`city ${city}`)
// }

const display = ({ id, name, address: { city } }) => {
    console.log(`id ${id}`)
    console.log(`Name ${name}`)
    console.log(`city ${city}`)
}

display({
    id: 1, name: 'subramanian', address: {
        city: 'Coimbatore'
    }
})