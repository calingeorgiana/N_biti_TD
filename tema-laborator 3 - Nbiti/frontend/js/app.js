const { PRIORITY_LOW } = require("node:constants");

var app = new Vue({
  el: "#hamming-encoder",
  data: {
    dataBits: [],
    status: "",
    numberOfDataBits: n,
  },
  created: function () {
    this.initDataBits(n);
  },
  methods: {
    initDataBits: function () {
      this.dataBits = [];
      for (var i = 0; i < this.numberOfDataBits; i++) {
        var bit = { data: null };
        this.dataBits.push(bit);
      }
    },
    send: function () {
      if (this.validate(this.dataBits) === true) {
        var encodedMessage = this.encode(this.dataBits);
        // this.status = encodedMessage + ' encoded sent to server ';
        console.log(encodedMessage, this.dataBits);
        return axios
          .put("http://localhost:3000/message", { bits: encodedMessage })
          .then((response) => (this.status = response.data));
      }
    },

    encode: function (bits) {
      // This function must be changed to allow any
      // number of data bits
      // Right now it only works for 4 data bits
      
      var m = Math.log2(n+1);     // m = numarul de biti de control

      // I found this algorithm to find the parity bits:

      /* Position 1: check 1 bit, skip 1 bit, check 1 bit, skip 1 bit, etc. (1,3,5,7,9,11,13,15,...)
         Position 2: check 2 bits, skip 2 bits, check 2 bits, skip 2 bits, etc. (2,3,6,7,10,11,14,15,...)
         Position 4: check 4 bits, skip 4 bits, check 4 bits, skip 4 bits, etc. (4,5,6,7,12,13,14,15,20,21,22,23,...)
         Position 8: check 8 bits, skip 8 bits, check 8 bits, skip 8 bits, etc. (8-15,24-31,40-47,...)

         Set a parity bit to 1 if the total number of ones in the positions it checks is odd.
         Set a parity bit to 0 if the total number of ones in the positions it checks is even.
      */

      var v = [];    // vector in care pastram bitii de control 
      var a = [];    // vector in care pastram bitii de pe pozitii puteri ale lui 2
      var b = [];    // vector care pastreaza restul numerelor pana la n care nu sunt in vectorul a

      var t1=0;
      var t2=0;

      for(var j=1;j<=n;j++)
      {
        for(var k=1;k<=n;k++)
          if(j == pow(2,k))
          {
              a[1]++;
              t++;
          }
        b[t2]++;
        t2++;
      }

      for(var i=0;i<m;i++)
      {
          // Aici trebuiau calculati bitii de paritate
          // in functie de puterea lui 2, faceam o suma a bitilor din cuvantul de cod din 2^x in 2^x pozitii
          // Exemplu:

          /*

          A byte of data: 10011010

          Position 1 checks bits 1,3,5,7,9,11:
              (?) _ (1) _ (0) 0 (1) _ (1) 0 (1) 0.     => ? + 1 + 0 +1 +1 + 1 = 4  , 4%2=0   => ?=0
          Position 2 checks bits 2,3,6,7,10,11:
              0 (? 1) _ 0 (0 1) _ 1 (0 1) 0.           => ? + 1 +0 +1 +0 +1 = 3    , 3%2=1   => ?=1 
          Position 4 checks bits 4,5,6,7,12:
              0 1 1 (? 0 0 1) _ 1 0 1 (0).             => ? +0 +0 +1 +0 = 1        , 1%2=1   => ?=1   
          Position 8 checks bits 8,9,10,11,12:
              0 1 1 1 0 0 1 (? 1 0 1 0).               => ?+1 + 0 + 1 + 0 = 2      , 2%2=0   => ?=0

          Code word: 011100101010.

          */
      }

      console.log("Control bits: " + c1 + "," + c2 + "," + c4);
      return [
        c1,
        c2,
        parseInt(bits[0].data),
        c4,
        parseInt(bits[1].data),
        parseInt(bits[2].data),
        parseInt(bits[3].data),
        // ....
      ];
    },
    parity: function (number) {
      return number % 2;
    },
    validate: function (bits) {
      for (var i = 0; i < bits.length; i++) {
        if (this.validateBit(bits[i].data) === false) return false;
      }
      return true;
    },
    validateBit: function (character) {
      if (character === null) return false;
      return parseInt(character) === 0 || parseInt(character) === 1;
    },
  },
});
