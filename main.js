// გადაეცით ფუნქციას ორი მასივი
// ფუნქციამ უნდა დააბრუნოს ახალი მასივი, რომელშიც მხოლოდ ის ელემენტები იქნება,
// რომელიც ორივე მასივისთვის საერთოა
// function findCommonElements(arr1, arr2)
// მაგალითი:
// findCommonElements([1, 2, 3], [2, 8, 1, 4]) უნდა დააბრუნოს [1, 2]

function findCommonElements(array1, array2) {
    const commonArray = [];
    for(const element of array1){
        if (array2.includes(element)){
            commonArray.push(element)
        }
    }
    return commonArray
}
const array1 = [1, 2, 3]
const array2 = [2, 8, 1, 4]
const common = findCommonElements(array1, array2)
console.log(common)




// დააბრუნეთ ფუნქციიდან შებრუნებული მასივი
// არ გამოიყენოთ reverse ფუნქცია
// function reverseArray(arr)
// მაგალითი:
// reverseArray([1, 2, 3, 4]) უნდა დააბრუნოს [4, 3, 2, 1]

function reverseArray(arr){
    const reversedArr = [];
    for(let i=arr.length - 1; i>=0; i--){
        reversedArr.push(arr[i])
    }
    return reversedArr
}
const arr = [1, 2, 3, 4]
const reversed = reverseArray(arr)
console.log(reversed)




// მოცემული გვაქვს ზრდადი ციფრების მასივი
// დაწერეთ ფუნქცია რომელიც დააბრუნებს ორ ელემენტს შორის მაქსიმალურ სხვაობას
// ელემენტები უნდა იყვნენ ერთმანეთის გვერდით
// function findMaxDiff(arr)
// მაგალითი:
// findMaxDiff([1, 2, 3, 8, 9]) უნდა დააბრუნოს 5
// რადგან ყველაზე დიდი სხვაობა არის რიცხვებში 8 და 3 შორის




// ფუნქციიდან დააბრუნეთ მასივის რიგით მეორე ყველაზე დიდი ციფრი
// მაგალითი :
// findSecondMax([1, 2, 3, 4, 5]) უნდა დააბრუნოს 4

function findSecondMax(){
    const numsArray = [1, 2, 3, 4, 5, 7]
    const maxNumber = Math.max(...numsArray)
    const filtered = numsArray.filter(num => num !== maxNumber)
    const secondMax = Math.max(...filtered)
    return secondMax
}
const secondMaxNumber = findSecondMax()
console.log(secondMaxNumber)




// დაწერეთ ფუნქცია რომელიც დააგენერირებს პაროლს შემთხვევითობის პრინციპით
// ფუნქციას უნდა გადავცეთ ციფრი, რამდენ სიმბოლოიანი პაროლიც გვინდა
// მაგალითი :
// generatePassword(8) უნდა დააგენერიროს პაროლი 8 სიმბოლოიანი

function generatePassword(passwordLength){
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = "";
    for(let i=0; i<=passwordLength; i++){
        let randPassword = Math.floor(Math.random() * chars.length)
        password+=chars[randPassword]
    }
    return password
}
const passwordLength = 8
const password = generatePassword(passwordLength)
console.log(password)




// დაწერეთ მარტივი კალკულატორის ფუნქცია რომელსაც
// გადაეცემა სამი არგუმენტი (ოპერატორი, პირველი ციფრი, მეორე ციფრი)
// მაგალითი :
// calculator('+', 5, 6) უნდა დააბრუნოს 11
// calculator('-', 5, 6) უნდა დააბრუნოს -1
// calculator('*', 5, 6) უნდა დააბრუნოს 30
// calculator('/', 5, 6) უნდა დააბრუნოს 0.8333333333333334
// calculator('/', 0, 6) უნდა დააბრუნოს '0 - ზე გაყოფა არ შეიძლება'

function calculator(op, fn, sn){
    switch(op){
        case '+':
         console.log(fn + sn)
         break;
        case '-':
         console.log(fn - sn)
         break;
        case'*':
         console.log(fn * sn)
         break;
        case '/':
         if(fn === 0){
            console.log("0-ზე გაყოფა არ შეიძლება")
         }   else {
            console.log(fn/sn)
         }
         break;
        default:
            console.log("????") 
         break;   
    }
}
calculator('/', 0, 5)
calculator('-', 280, 100)
calculator('*', 17, 2)