//pure function
/**
 * Rules:
 * 1.if a function receives input, it should return the same 
 *    -every component with respect to props are pure functions 
 * 2.if a function receives input as object/array, how to change 
 *    you have to apply the rule called "immuability" - immutable objects 
 *   immutable object means, every time the function should return new object when ever mutation happens
 */

//pure or impure
//impure function
// function updateProfile(profile, city) {
//     //logic to update
//     profile.city = city;
//     return profile
// }

function updateProfile(profile, city) {
    //syntax to return new object(immutable)
    //create object and copy all properties manually and return
    // return {
    //     id: profile.id,
    //     name: profile.name,
    //     city: city
    // }
    //using object.assign method
    // return Object.assign({}, profile, { city: city })
    //using spread operator
    return { ...profile, city: city }
}


let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
console.log('before update', profile)
const updatedProfile = updateProfile(profile, 'Coimbatore')
console.log(profile === updatedProfile ? 'Equal' : 'notEqual')
console.log('after update', profile)









