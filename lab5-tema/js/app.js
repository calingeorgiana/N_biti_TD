var app = new Vue({
  el: "#baseband-encoder",
  data: {
    bits: [],
    encodedBits: [],
      encodedNrzlBits: [],
      encodedNrzmBits: [],
      encodedNrzsBits: [],
      encodedRZBits: [],
      encodedManchesterBits: [],
      encodedBiphase_M: [],
      encodedBiphase_S: [],
      encodedMLB_AMI: [],
    status: "",
    numberOfBits: 8,
    validateBit: validateBit,
  },
  created: function () {
    this.bits = getBitstream(this.numberOfBits);
  },
  methods: {
    encode: function () {
      this.encodedBits = getManchesterLevelEncoding(this.bits);
          this.encodedNrzlBits = getNRZl(this.bits);
          this.encodedNrzmBits = getNRZm(this.bits);
          this.encodedNrzsBits = getNRZs(this.bits);
          this.encodedRZBits = getRZ(this.bits);
          this.encodedManchesterBits = getBiphase_Manchester(this.bits);
          this.encodedBiphase_M = getBiphase_M(this.bits);
          this.encodedBiphase_S = getBiphase_S(this.bits);
          this.encodedMLB_AMI = getMLB_AMI(this.bits);
      },
    },
  },
);
