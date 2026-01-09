# OOPs Concepts in JavaScript

## 1. Class
- JavaScript me class ek blueprint hota hai jisse hum objects create karte hain. Isme properties aur methods define kiye jaate hain.

## 2. Constructor
- Constructor method class ka pehla element hota hai jo object create karte waqt call hota hai. Isme hum properties ko initialize karte hain.

## 3. Methods
- Methods wo functions hote hain jo class ke andar define kiye jaate hain. Jaise `erase()` aur `write()` methods `CreatePencil` class me hain.

## 4. Inheritance
- Inheritance se ek class dusri class ki properties aur methods ko inherit kar sakti hai. Isse code reusability badh jaati hai. `Admin` class `User` class se inherit hoti hai.

## 5. Super
- `super()` function ka use parent class ke constructor ko call karne ke liye hota hai. Isse child class parent class ki properties ko access kar sakti hai.

## 6. Prototypal Inheritance
- JavaScript me pehle class ka concept nahi tha, isliye inheritance objects ke through hota tha. Isse prototypal inheritance kehte hain.

## 7. Object.create()
- `Object.create()` method se ek naya object create hota hai jo kisi existing object ki properties ko inherit karta hai.

## Comments Explanation
- **Constructor**: Yeh pehla element hota hai jo object create karte waqt call hota hai.
- **Methods**: Yeh functions hote hain jo class ke andar define kiye jaate hain.
- **Arrow Function**: Arrow functions apni value parent se lete hain.
- **Classical Inheritance**: Yeh inheritance ka traditional form hai jo sabhi programming languages me hota hai.
- **Prototypal Inheritance**: Yeh JavaScript ka unique inheritance model hai jisme ek object dusre object ki properties ko inherit karta hai.

## Example Objects
- `p1` aur `p2` objects `CreatePencil` class ke instances hain.
- `u1`, `u2`, aur `u3` objects `User` aur `Admin` classes ke instances hain.
