class Ulti {

  constructor() {
	this.name = 'Ulti'
  }

  toString() {
	return this.name
  }
   cipherRot13(str) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot13);

  function rot13(correspondance) {
    const charCode = correspondance.charCodeAt();
    return String.fromCharCode(
            ((charCode + 13) <= 90) ? charCode + 13
                                    : (charCode + 13) % 90 + 64
           );
  }
   }

}
