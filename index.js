import moment from 'moment'
const current = Date.now() 
const t = current - (3600 * 24);
console.log(new Date()); 
console.log(current); 
console.log(moment().add(1, 'days').format()); 
console.log(moment(t).format());
console.log(Date.now()); 
