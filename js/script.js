const title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector("#year"),
    button = document.querySelector('.btn'),
    table = document.querySelector('#book_list');

button.addEventListener('click', () => {
    
    console.log(`${title.value}`)
    if(title.value == '' && author.value == '' && year.value == '') {
        alert('Please input your information')
    }else{
        const newRow = document.createElement('tr')

        // const newTitle = document.createElement('td')
        // const newAuthor = document.createElement('td')
        // const newYear = document.createElement('td')

        const titleone = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${year.value}</td>
        `

        // newTitle.innerHTML = title.value
        // newAuthor.innerHTML = author.value
        // newYear.innerHTML = year.value

        // newRow.appendChild(newTitle)
        // newRow.appendChild(newAuthor)
        // newRow.appendChild(newYear)

        

        table.appendChild(titleone)
        title.value = ''
        author.value = ''
        year.value = ''
    }
})

