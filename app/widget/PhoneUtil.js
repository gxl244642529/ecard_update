


export  function encodePhone(tel){
    var reg = /^(\d{3})\d{4}(\d{4})$/;
    tel = tel.replace(reg, "$1****$2");
    // console.log(tel);
  	return tel;
	}
