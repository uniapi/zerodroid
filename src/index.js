/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 21, 2018
*************************************************************************/

/* Solution:
      To count trailing zeros in {n} number in the base {b}
      It's necessary to factor {b} into products of primes {i} in the exponent {p}
      After that {n} should be divided by each prime {i}
      And rounded down to the nearest integer
      The resulted divisions sum of each prime {i} shoud be divided by its exponent {p}
      And the smallest answer is the trailing zeros count that {n} number has in the base {b}
*/

function zerodroid(number, base) {
  let num = number;              // the copy of number
  let div = base;                // the copy of base
  const lim = Math.floor(div/2); // the search limit for factorization
  const factorizer = { };        // the base factorizer
  const primes = [ 2 ];          // the primes database
  let i, j, l, n;                // a potential factor, an iterator prime index, the primes length, the factor power
  let ans, zeros = 0;            // the highest factor power division answer, zeros to send as the answer result

  for(n=0; !(div % 2); n++)      // incrementing the power of {2} until there's a division reminder
      div /= 2;                  // decreasing the base to get the next power
  if (n)                         // if not empty so the base is divided by {2}
    factorizer[2] = { n: n };    // creating a {2} factor object and saving its power

  for (i=3; i <= lim; i += 2) {                     // continuing to search for the next factor
    if (div % i)                                    // if there's a reminder it's not a factor
      continue;                                     // so there's no sense to check whether it's a prime
    for (j=0, l=primes.length; j < l; j++) {        // checking whether the found factor is a prime using the primes database
      if (!(i % primes[j]))                         // if it's divided without a reminder the factor is not a prime
        break;                                      // so stopping the search
    }
    if (j != l)                  // if not all primes are used from the database
      continue;                  // continuing to search for a new factor as the found factor {i} is not a prime

    for (n=0; !(div%i); n++)     // finding the highest factor power
      div /= i;                  // decreasing the base to get the next possible power
    if (n) {                     // if not empty there are powers
      primes[l] = i;             // adding the prime to the database
      factorizer[i] = { n: n }   // creating a prime {i} factor object and saving its power
    }
  }

  if (primes.length === 1 && !factorizer[2]) {      // if {2} is the only prime in the database and it's not in the factorizer yet
    primes[0] = base;                               // so adding the base to the database instead of {2} as the base is a prime
    factorizer[base] = { n: 1 };                    // creating the {base} factor object ans saving {1} as its power
  }

  for (const f in factorizer) {                     // iterating through the prime factors saved in the database
    for (i=f*1,n=0, num=number; i <= num; n += num) // counting {n} divisions by the prime factor
      num = Math.floor(num / i);                    // getting whole divisions and saving it instead of {num}
    ans = Math.floor(n / factorizer[f].n);          // the answer for the highest power of {i} dividing {n}
    if (ans < zeros || !zeros)                      // if the answer is less then the last zeros or is empty
      zeros = ans;                                  // saving the answer
  }
  return zeros;
}

export { zerodroid }
