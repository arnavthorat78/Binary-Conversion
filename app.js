// Decimal to Binary
const decToBinDOM = document.querySelector(".decToBin");

const decToBin = (decimal) => {
    const myArr = [];
    
    while (decimal >= 2) {
        let result = decimal % 2;
        if (result === 0) {
            myArr.push(0);
        } else {
            myArr.push(1);
        }
        decimal = Math.floor((decimal / 2));
    }
    
    myArr.push(1);
    return myArr.reverse();
};

decToBinDOM.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const dec = decToBinDOM.decimalNum.value;
    const result = decToBin(dec).toString().replace(/,/g, "");
    
    decToBinDOM.resultBin.value = result;
});

// IP Address Conversion
const ipAddress = document.querySelector(".ipAddress");

const ipConversion = (ip) => {
    const ipArray = ip.split(".");
    const finalArray = [];
    
    ipArray.forEach((decimal) => {
        const myArr = [];
        decimal = parseInt(decimal);
		
		if (decimal === 0) {
			for (let i = 0; i < 8; i++) {
				myArr.push(0);
			}
		} else {
			while (decimal >= 2) {
				let result = decimal % 2;
				if (result === 0) {
					myArr.push(0);
				} else {
					myArr.push(1);
				}
				decimal = Math.floor((decimal / 2));
			}
        
			myArr.push(1);
			for (let j = myArr.length; j < 8; j++) {
				myArr.push(0);
			}
		}
        
        finalArray.unshift(myArr.reverse().toString().replace(/,/g, ""));
    });
    
    return finalArray.reverse().toString().replace(/,/g, ".");
};

ipAddress.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const ipNum = ipAddress.ipAddress.value;
    const result = ipConversion(ipNum);
    
    if (
        !ipNum.includes(".") ||
        ipNum.split(".").length !== 4
    ) {
        ipAddress.resultBin.value = "Error: Value must be a valid IP address.";
    } else {
        ipAddress.resultBin.value = result;
    }
});

// Binary to Decimal
const binToDecDOM = document.querySelector(".binToDec");

const binToDec = (bin) => {
    const stringArr = bin.split("").reverse();
    const numArr = [];
    
    stringArr.forEach((str) => {
        numArr.push(parseInt(str));
    });
    
    let total = 0;
    numArr.forEach((num, idx) => {
        if (num !== 0) {
            total += Math.pow(2, idx) * 1;
        } else {
            total += 0;
        }
    });
    
    return total;
};

binToDecDOM.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const bin = binToDecDOM.binaryNum.value;
    const result = binToDec(bin);
    
    const stringBinArr = bin.split("");
    let noErr = true;
    stringBinArr.forEach((str) => {
        str = parseInt(str);
        
        if (str > 1) {
            noErr = false;
        }
    });
    
    binToDecDOM.resultDec.value = noErr ? result : "Error: Invalid binary number.";
});
