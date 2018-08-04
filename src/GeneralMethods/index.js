import moment from 'moment'

export  function titleValidation(str){
    let bookName = str.trim()
    //remove non English Letter (not including numbers)
    bookName= bookName.replace('-',' ')
    bookName= bookName.replace('_',' ')
    bookName= bookName.replace(/[^0-9a-zA-Z ]/gi, '')

    // uppercase each first letter
    // bookName= bookName.replace(/\b\w/g, l => l.toUpperCase())
    bookName= uppercaseFirstLetter(bookName)
    return bookName
}

function uppercaseFirstLetter(str) {
    let arr = str.split(" ")

    arr = arr.map((word)=>{
        word = word.toLowerCase()
        word = word.charAt(0).toUpperCase() + word.slice(1)
        return word
    })
    return arr.join(" ")

}

export function isDateIsValid (date){
    //check if date is valid
    let valid = moment(date, 'YYYY-MM-DD',true).isValid()

    //check if date is in the future
    //for future results output starts with "in 2 days"
    let time = moment(date, "YYYY-MM-DD").fromNow()
    time = time.slice(0,2)
    let future = (time!=="in")


    return valid && future
}

export function isBookExist (bookName, bookList, originalName){
    if(originalName===bookName){return false}
    let result = bookList.filter((book)=>titleValidation(book.title)===bookName)
    return (result.length!==0)
}