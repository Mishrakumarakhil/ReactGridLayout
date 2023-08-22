export const  numberToWords=(number) =>{
    const units = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE'];
    const teens = ['', 'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN'];
    const tens = ['', 'TEN', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];
    const thousands = ['', 'THOUSAND', 'MILLION', 'BILLION'];
  
    function convertLessThanThousand(num) {
      if (num === 0) {
        return '';
      } else if (num < 10) {
        return units[num];
      } else if (num < 20) {
        return teens[num - 10];
      } else if (num < 100) {
        return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
      } else {
        return units[Math.floor(num / 100)] + ' HUNDRED ' + convertLessThanThousand(num % 100);
      }
    }
  
    function toWords(num) {
      if (num === 0) {
        return 'ZERO';
      }
  
      let words = '';
      let index = 0;
  
      while (num > 0) {
        if (num % 1000 !== 0) {
          words = convertLessThanThousand(num % 1000) + ' ' + thousands[index] + ' ' + words;
        }
        num = Math.floor(num / 1000);
        index++;
      }
  
      return words.trim();
    }
  
    return toWords(number);
  }